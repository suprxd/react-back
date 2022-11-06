import { Response } from 'express';

export default function (res: Response, body: any, data?: any) {
    body.data = data;
    body.timestamp = Date.now();
    res.status(body.httpCode).json(body);
}