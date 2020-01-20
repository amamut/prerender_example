"use strict";
var prerender = require("prerender");
var server = prerender({
    followRedirects: true,
});
server.use(prerender.whitelist());
server.start();
//# sourceMappingURL=prerender.js.map