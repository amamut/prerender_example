const prerender = require("prerender");
const server = prerender({
    followRedirects: true,
});
server.use(prerender.whitelist());
server.start();
