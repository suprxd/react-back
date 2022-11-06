import { Schema, model, SchemaTypes } from 'mongoose';

const testimonialSchema = new Schema(
    {
        authorImage: { type: SchemaTypes.String, required: true },
        authorName: { type: SchemaTypes.String, trim: true, required: true },
        subtitle: { type: SchemaTypes.String, trim: true, required: true },
        description: { type: SchemaTypes.String, required: true },
        active: { type: SchemaTypes.Number, default: 1 }
    },
    {
        versionKey: false,
        timestamps: true,
        collection: 'testimonial'
    }
);

export default model('testimonial', testimonialSchema);