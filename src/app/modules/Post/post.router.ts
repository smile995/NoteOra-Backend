import express from 'express';
import { postController } from './post.controller';


const router = express.Router();
router.post("/create",postController.createPost);
router.get("/",postController.getAllPosts);
router.get("/:slug",postController.getSinglePost);

export const PostRoutes = router;