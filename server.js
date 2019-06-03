const next = require("next");
const express = require("express");
const morgan = require("morgan");
const proxyMiddleware = require("http-proxy-middleware");
const routes = require("./routes");
// settings
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const api_server = process.env.API_SERVER || "http://localhost:8000";
// proxy
const devProxy = {};

//
const app = next({ dev });
const handler = routes.getRequestHandler(app);
//
app.prepare().then(() => {
    const server = express();

    if (dev) {
        Object.keys(devProxy).forEach(function(context) {
            server.use(proxyMiddleware(context, devProxy[context]));
        });
    }
    server.use(morgan());

    server.all("*", (req, res) => handler(req, res));

    server.listen(port, "0.0.0.0", err => {
        if (err) {
            throw err;
        }
        console.log(`> Ready on port ${port}`);
    });
});
