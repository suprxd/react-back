import { Exception } from "./Exception";

export class TestimonialNotFound extends Exception {
    constructor() {
        super('Testimonial Not Found');
    }
}