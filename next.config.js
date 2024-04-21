  const withPWA = require("next-pwa");

module.exports = withPWA({
    images: {
        domains: [ "https://discord.gg/3B5sX7C4SD" ]
    },
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV == "development"
    }
});
