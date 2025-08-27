import { Router } from "express";
import { PostRoutes } from "../modules/Post/post.router";

export const router= Router();
const routespath=[
{
     path:"/posts",
     route:PostRoutes
}
]

routespath.forEach(route=>router.use(route.path,route.route))