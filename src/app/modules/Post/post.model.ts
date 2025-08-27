import { Schema, model } from "mongoose";
import { TPost } from "./post.interface";


const postSchema = new Schema<TPost>(
  {
    title: { type: String, required: true },
    slug: { type: String, unique: true },
    description: { type: String },
    author: { type: String, required: true },
    categories: [{ type: String }],
    featuredImage: { type: String },
    status: { type: String, enum: ["pending", "published"], default: "pending" },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    commentsCount: { type: Number, default: 0 },
    readingTime: { type: String },
    isFeatured: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    keywords: [{ type: String }],
  },
  { timestamps: true }
);

export const PostModel = model<TPost>("Post", postSchema);
