import  cors  from 'cors';
import express, { type Application, type Request, type Response } from "express"
import { router } from './app/Routes';
 const app:Application = express()

// perser
app.use(express.json());
app.use(cors());
app.use("/api",router)
app.get('/', (req:Request, res:Response) => {
  res.send('Welcome to Noteora')
})


export default app