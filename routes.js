const nextRoutes = require("@vlzh/next-routes").default;
const routes = (module.exports = nextRoutes());

routes
.add({name: "main", pattern: "/", page: "index"})
.add({name: "account_settings", pattern: "/account/settings", page: "account_settings"})
.add({name: "account_subscriptions", pattern: "/account/subscriptions", page: "account_subscriptions"})
.add({name: "event", pattern: "/event", page: "event"})
.add({name: "profile", pattern: "/profile", page: "profile"})
.add({name: "results", pattern: "/results", page: "results"})
.add({name: "video", pattern: "/video", page: "video"})
.add({name: "collection", pattern: "/collection", page: "collection"})
