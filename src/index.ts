import { URLController } from './controller/URLController';
import express,{Request,Response} from 'express';
import { MongoConnection } from './database/MongoConnection';

const api = express();

api.use(express.json())

const urlController= new URLController();
api.post("/shorten",urlController.shorten)
api.get("/:hash",urlController.redirect)


const database=new MongoConnection()
database.connect();

api.get("/test",(req:Request,res:Response)=>{
    res.json({sucess:"sucess"})
})


api.listen(3000,()=>{
    console.log("Logado na 3000");
    
});