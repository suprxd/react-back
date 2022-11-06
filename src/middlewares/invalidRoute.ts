import { Response, Request, NextFunction } from "express";

export default function (
    req: Request,
    res: Response,
    next: NextFunction
) {
    return res.status(404).json({
        statusCode: 404,
        message: 'Invalid Route'
    });
}