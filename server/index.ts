import express from "express";
import compression from "compression";
import { createPageRenderer } from "vite-plugin-ssr";
import path from "path";

const isProduction = process.env.NODE_ENV === "production";
const root = `${__dirname}/..`;

startServer();

async function startServer() {
  const app = express();
  const publicDir = path.resolve("../", __dirname, root, "public");
  console.log("pubbbb", publicDir);
  app.use(compression());
  app.use("/public", express.static(publicDir));
  let viteDevServer;
  if (isProduction) {
    app.use(express.static(`${root}/dist/client`));
  } else {
    const vite = require("vite");
    viteDevServer = await vite.createServer({
      root,
      server: { middlewareMode: "ssr" },
    });
    app.use(viteDevServer.middlewares);
  }

  const renderPage = createPageRenderer({
    viteDevServer,
    isProduction,
    root,
  });
  //   app.use(express.static(path.join(__dirname, "public")));
  app.get("*", async (req, res, next) => {
    const url = req.originalUrl;
    console.log("urlll", url);

    // if (url === "/elpod-start") {
    //   res.render("../public/elpod-start/index.html");
    //   return;
    // }
    const pageContextInit = {
      url,
    };
    const pageContext = await renderPage(pageContextInit);
    const { httpResponse } = pageContext;
    if (!httpResponse) return next();
    // if (pageContext?.pageProps?.error) {
    //     // res.render('../renderer/')
    //     // if (req.statusCode) {
    //     // }
    // }
    const { body, statusCode, contentType } = httpResponse;
    res.status(statusCode).type(contentType).send(body);
  });

  //   app.get("/elpod-start", async (req, res, next) => {

  //   });

  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
}
