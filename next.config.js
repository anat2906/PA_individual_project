const withPlugins = require("next-compose-plugins");
const images = require("next-images");

const BASE_URL = process.env.BASE_URL || "/";
module.exports = withPlugins([images]);
