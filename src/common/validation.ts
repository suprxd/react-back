import { Joi } from "celebrate"

export default {
    TESTIMONIAL: {
        _TESTIMONIALID: Joi.string().regex(/^[a-f\d]{24}$/i),
        AUTHOR_NAME: Joi.string().trim().max(64),
        AUTHOR_IMAGE: Joi.string().trim().uri(),
        SUBTITLE: Joi.string().trim().max(64),
        DESCRIPTION: Joi.string().trim().max(1000),
    }
}