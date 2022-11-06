import { Router } from 'express';
import { celebrate } from 'celebrate';

import VALIDATION from '../common/validation';
import { editTestimonial, getTestimonials, createTestimonial, deleteTestimonial } from '../controllers/testimonialController';

const router = Router();

// Save Testimonial
router.post('/',
    celebrate({
        body: {
            authorName: VALIDATION.TESTIMONIAL.AUTHOR_NAME,
            authorImage: VALIDATION.TESTIMONIAL.AUTHOR_IMAGE,
            subtitle: VALIDATION.TESTIMONIAL.SUBTITLE,
            description: VALIDATION.TESTIMONIAL.DESCRIPTION
        }
    }),
    createTestimonial
);

// View Testimonials
router.get('/', getTestimonials);

// Edit Testimonial
router.patch('/:testimonialId',
    celebrate({
        params: { testimonialId: VALIDATION.TESTIMONIAL._TESTIMONIALID },
        body: {
            authorName: VALIDATION.TESTIMONIAL.AUTHOR_NAME.optional(),
            authorImage: VALIDATION.TESTIMONIAL.AUTHOR_IMAGE.optional(),
            subtitle: VALIDATION.TESTIMONIAL.SUBTITLE.optional(),
            description: VALIDATION.TESTIMONIAL.DESCRIPTION.optional()
        }
    }),
    editTestimonial
);

// Delete Testimonial
router.delete('/:testimonialId',
    celebrate({
        params: { testimonialId: VALIDATION.TESTIMONIAL._TESTIMONIALID }
    }),
    deleteTestimonial
);

export default router;