import {withIronSessionApiRoute} from "iron-session/next";

const sessionOptions = {
  cookieName: "ts",
  password: process.env["NEXT_SESSION_PASSWORD"] || "",
};

// @ts-ignore: FIX LATER
async function provider(req, res) {
  const host = req?.headers?.host;
  const provider = req?.query?.route;

  const params = new URLSearchParams();
  // TODO: CHANGE TO HTTPS LATER
  params.set("code_handler", `http://${host}/api/auth/callback?`);
  // TODO: CHANGE TO HTTPS LATER
  params.set("redirect_uri", `http://${host}${req.query?.continue}`);
  const authUrl = `http://${process.env["NEXT_PUBLIC_API"]}/auth/${provider}?${params.toString()}`;

  return res.redirect(authUrl);
}

const routes = {
  // @ts-ignore: FIX LATER
  async callback(req, res) {
    const {token, redirect} = req.query;
    req.session.access_token = token;
    await req.session.save();
    return res.redirect(redirect);
  },
  // @ts-ignore: FIX LATER
  async logout(req, res) {
    await req.session.destroy();
    return res.redirect("/");
  },
  // @ts-ignore: FIX LATER
  async token(req, res) {
    const token = req.session.access_token;
    return res.send({token});
  },
};

// @ts-ignore: FIX LATER
async function mainHandler(req, res) {
  const route = req?.query?.route;
  // @ts-ignore: FIX LATER
  return typeof routes[route] === "function" ? routes[route](req, res) : provider(req, res);
}

const authApiRoutes = withIronSessionApiRoute(mainHandler, sessionOptions);

export default authApiRoutes;
