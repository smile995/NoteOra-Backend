import { TPost } from "./post.interface";
import { PostModel } from "./post.model";
import slugify from "slugify";
const cteatePostIntoDB = async (post: TPost) => {
  const slugWIthUnderscore = slugify(post.title, "_");
  post.slug = slugWIthUnderscore;
  const result = await PostModel.create(post);
  return result;
};
const getAllPostFromDB = async () => {
  const result = await PostModel.find({ isDeleted: false });
  return result;
};
const getSinglePostFromDB = async (id: string) => {
  const result = await PostModel.findById(id);
  return result;
};
const softDeleteSinglePostFromDB = async (id: string) => {
  const result = await PostModel.findOneAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true }
  );
  return result;
};

export const PostServices = {
  cteatePostIntoDB,
  getAllPostFromDB,
  getSinglePostFromDB,
  softDeleteSinglePostFromDB,
};
