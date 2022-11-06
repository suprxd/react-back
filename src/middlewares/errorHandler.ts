import { isCelebrateError } from "celebrate";
import { Response, Request, NextFunction } from "express";

export default function (
    error: any,
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (isCelebrateError(error)) {
        // validation error handling
        console.log(error.details);
        return res.status(500).json({
            statusCode: 500,
            message: 'Internal Server Error'
        });
    } else if (error.expose) {
        // error handling for incorrect json request parsing
        return res.status(error.status).json({
            success: false,
            message: error.message,
            statusCode: error.statusCode
        });
    } else if (error.appLevelException) {
        console.error('Server Error', error);
        return res.status(500).json({
            statusCode: 500,
            message: error.message
        });
    } else {
        console.error('Unknown Server Error', error);
        return res.status(500).json({
            statusCode: 500,
            message: 'Internal Server Error'
        });
    }
}