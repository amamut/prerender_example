import express, { Request } from "express";
import { RedisClient } from "redis";
import { cacheableStatusCodes } from "./base";

const rClient = new RedisClient({
    host: "127.0.0.1",
    port: 6379,
});

rClient.on("connect", () => console.log("REDIS CONNECTED"));

const app = express();
app.use(
    require("prerender-node")
        .set("beforeRender", (req: Request, done: any) => {
            rClient.hmget(req.url, "body", "status", (err, fields) => {
                if (err) {
                    return done(err);
                }
                done(err, { body: fields[0], status: fields[1] });
            });
        })
        .set("afterRender", (err: Error, req: Request, prerender_res: any) => {
            // Don't cache responses that might be temporary like 500 or 504.
            if (cacheableStatusCodes[prerender_res.statusCode]) {
                rClient.hmset(
                    req.url,
                    "body",
                    prerender_res.body,
                    "status",
                    prerender_res.statusCode,
                );
                rClient.expire(req.url, 60 * 3);
            }
        }),
);
app.listen(process.env.PORT || 8000);
