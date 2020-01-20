"use strict";
// declare module "prerender-node" {
//     import { NextFunction, Request, RequestHandler, Response } from "express";
//     function p(): RequestHandler;
//     namespace p {
//         interface IPrerenderResponse {
//             statusCode: number;
//             body: string;
//         }
//         type PrerenderedResponseCallback = (
//             err: Error,
//             prerenderedResponse: IPrerenderResponse,
//         ) => {};
//         type RequestCallback = (
//             error: Error,
//             callback: PrerenderedResponseCallback,
//         ) => {};
//         type DoneCallback = (
//             err: Error,
//             cachedRender: string | { status: number; body: string },
//         ) => {};
//         const set: (name: any, value: any) => {};
//         const whitelisted: (whitelist: string) => {};
//         const blacklisted: (blacklist: string) => {};
//         const shouldShowPrerenderedPage: (req: Request) => boolean;
//         const prerenderServerRequestOptions: { [key: string]: any };
//         const getPrerenderedPageResponse: RequestCallback;
//         const gunzipResponse: (
//             response: Response,
//             callback: PrerenderedResponseCallback,
//         ) => {};
//         const plainResponse: (
//             response: Response,
//             callback: PrerenderedResponseCallback,
//         ) => {};
//         const buildApiUrl: (req: Request) => string;
//         const getPrerenderServiceUrl: () => string;
//         const beforeRenderFn: (req: Request, done: DoneCallback) => {};
//         const afterRenderFn: (
//             err: Error,
//             req: Request,
//             prerenderedResponse: IPrerenderResponse,
//         ) => {};
//     }
//     export = p;
// }
//# sourceMappingURL=prerender-node.js.map