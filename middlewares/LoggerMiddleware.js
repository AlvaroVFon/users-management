import {generateLogger} from "../config/logger.js";

const logger = generateLogger("LoggerMiddleware");

function loggerMiddleware(req, res, next) {

    const requestContent = {
        method: req.method,
        url: req.url,
        body: req.body,
        headers: req.headers
    }

    const originalRequest = structuredClone(requestContent);

    res.on('finish', () => {
        res.statusCode >= 400 && res.statusCode !== 500 ?
            logger.warn({
                statusCode: res.statusCode,
                request: originalRequest,
                response: {statusCode: res.statusCode, body: JSON.stringify(res.body)}
            }) :
            logger.info({statusCode: res.statusCode, request: originalRequest});
    })

    next()
}

export {loggerMiddleware}
