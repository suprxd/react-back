import { Response, Request, NextFunction } from "express";
import {
    getAllTestimonials,
    removeTestimonial,
    saveTestimonial,
    updateTestimonial
} from "../services/testimonialService";
import sendResponse from "../utils/sendResponse";
import { CreateTestimonialRequest, UpdateTestimonialRequest } from "../interfaces/Testimonial";

export const getTestimonials = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const testimonialList = await getAllTestimonials();
        sendResponse(res, {
            httpCode: 200,
            statusCode: 200,
            message: 'Success Response'
        }, testimonialList);
    } catch (error) {
        next(error);
    }

}

export const createTestimonial = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        let payload: CreateTestimonialRequest = req.body;
        const newTestimonialData = await saveTestimonial(payload);
        sendResponse(res, {
            httpCode: 200,
            statusCode: 200,
            message: 'Success Response'
        }, newTestimonialData);
    } catch (error) {
        next(error);
    }
}

export const deleteTestimonial = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { testimonialId } = req.params;
        await removeTestimonial(testimonialId);
        sendResponse(res, {
            httpCode: 200,
            statusCode: 200,
            message: 'Success Response'
        });
    } catch (error) {
        next(error);
    }
}

export const editTestimonial = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { testimonialId } = req.params;
        const payload: UpdateTestimonialRequest = req.body;
        await updateTestimonial(testimonialId, payload);
        sendResponse(res, {
            httpCode: 200,
            statusCode: 200,
            message: 'Success Response'
        });
    } catch (error) {
        next(error);
    }
}