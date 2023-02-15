import {withIronSessionApiRoute} from "iron-session/next";

import {PUBLIC_API} from "_app/constants";

export const sessionOptions = {
  cookieName: "ts",
  password: process.env.NEXT_SESSION_PASSWORD || "session_password",
};

// @ts-ignore: FIX LATER
async function provider(req, res) {
  const host = req?.headers?.host;
  const provider = req?.query?.route;

  const params = new URLSearchParams();
  const protocol = process.env.NODE_ENV !== "development" ? "https" : "http";

  params.set("code_handler", `${protocol}://${host}/api/auth/callback?`);
  params.set("redirect_uri", `${protocol}://${host}${req.query?.continue}`);

  const authUrl = `${protocol}://${PUBLIC_API}/auth/${provider}?${params.toString()}`;

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
