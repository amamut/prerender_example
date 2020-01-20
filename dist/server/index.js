"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var redis_1 = require("redis");
var base_1 = require("./base");
var rClient = new redis_1.RedisClient({
    host: "127.0.0.1",
    port: 6379,
});
rClient.on("connect", function () { return console.log("REDIS CONNECTED"); });
var app = express_1.default();
app.use(require("prerender-node")
    .set("beforeRender", function (req, done) {
    rClient.hmget(req.url, "body", "status", function (err, fields) {
        if (err) {
            return done(err);
        }
        done(err, { body: fields[0], status: fields[1] });
    });
})
    .set("afterRender", function (err, req, prerender_res) {
    // Don't cache responses that might be temporary like 500 or 504.
    if (base_1.cacheableStatusCodes[prerender_res.statusCode]) {
        rClient.hmset(req.url, "body", prerender_res.body, "status", prerender_res.statusCode);
        rClient.expire(req.url, 60 * 3);
    }
}));
app.listen(process.env.PORT || 8000);
//# sourceMappingURL=index.js.map