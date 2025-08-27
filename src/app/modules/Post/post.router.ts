import express from 'express';


const router = express.Router();
router.get("/",(req,res)=>{
     res.send("moira ja")
})

export const PostRoutes = router;