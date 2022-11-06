import { Types } from 'mongoose';
import { TestimonialNotFound } from '../errors/testimonialNotFound';
import {
    CreateTestimonialRequest,
    UpdateTestimonialRequest
} from '../interfaces/Testimonial';
import Testimonial from '../models/testimonialModel';

export const getAllTestimonials = async () => {
    const testimonialList =
        await Testimonial
            .find(
                { active: 1 },
                {
                    authorImage: 1,
                    authorName: 1,
                    description: 1,
                    subtitle: 1
                }
            )
            .sort({ updatedAt: -1 }).exec();

    return testimonialList;
}

export const saveTestimonial = async (
    payload: CreateTestimonialRequest
) => {
    let testimonialData = await new Testimonial(payload).save();
    return testimonialData.toObject();
}

export const removeTestimonial = async (
    testimonialId: any
) => {
    testimonialId = new Types.ObjectId(testimonialId);
    if (!await checkTestimonialExists(testimonialId)) {
        throw new TestimonialNotFound();
    }
    await Testimonial.updateOne(
        { _id: testimonialId },
        { $set: { active: 0 } }
    ).exec();
}

export const updateTestimonial = async (
    testimonialId: any,
    payload: UpdateTestimonialRequest
) => {
    testimonialId = new Types.ObjectId(testimonialId);
    if (!await checkTestimonialExists(testimonialId)) {
        throw new TestimonialNotFound();
    }
    await Testimonial.updateOne(
        { _id: testimonialId },
        { $set: payload },
        { new: true }
    ).exec();
}

export const checkTestimonialExists = async (
    testimonialId: Types.ObjectId
) => {
    testimonialId = new Types.ObjectId(testimonialId);
    const testimonialExists =
        await Testimonial
            .findOne({ _id: testimonialId })
            .exec();
    return !!testimonialExists;
}