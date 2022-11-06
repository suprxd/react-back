export interface CreateTestimonialRequest {
    authorName: string,
    authorImage: string,
    subtitle: string,
    description: string
}

export interface UpdateTestimonialRequest {
    authorName?: string,
    authorImage?: string,
    subtitle?: string,
    description?: string
}