import {withIronSessionApiRoute} from "iron-session/next";

import {sessionOptions} from "./[route]";

// @ts-ignore: work in progress
async function handler(req, res) {
  await req.session.destroy();
  return res.redirect("/");
}

export default withIronSessionApiRoute(handler, sessionOptions);
