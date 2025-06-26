import express from 'express';
import { addFood, listFood, removeFood} from '../controllers/foodController.js';
import multer from 'multer';  // using that we will create img storage system

const foodRouter = express.Router();

// Image Storage engine

const storage = multer.diskStorage({
    destination: "uploads", 
    filename: (req, file, cb)=> {
       return cb(null, `${Date.now()} ${file.originalname}`)
    }
}) 

const upload = multer({storage:storage})

foodRouter.post("/add", upload.single("image"),addFood)    // we use post method to send the data on server 
foodRouter.get("/list", listFood )
foodRouter.post("/remove", removeFood);

// Imagee Storage Engine  



 


export default foodRouter;