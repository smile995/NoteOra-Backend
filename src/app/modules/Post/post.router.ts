import express from 'express';
import { postController } from './post.controller';


const router = express.Router();
router.post("/create",postController.createPost);
router.get("/",postController.getAllPosts);

export const PostRoutes = router;