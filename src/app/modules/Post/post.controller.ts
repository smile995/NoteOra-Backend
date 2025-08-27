import { Request, Response } from "express";
import { PostServices } from "./post.service";

const createPost = async (req: Request, res: Response) => {
     const postData= req.body;
     const result= await PostServices.cteatePostIntoDB(postData);
     res.send(result).status(200)
};
const getAllPosts = async (req: Request, res: Response) => {
     const result= await PostServices.getAllPostFromDB();
     res.send(result).status(200)
};



export const postController = {
  createPost,getAllPosts,
};
