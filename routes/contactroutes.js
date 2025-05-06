// dependecy
import express from "express";
import { deleteContactController, getContactController, postContactController } from "../Controller/contactController.js";




// routes
const router = express.Router();

router.post("/postContact",postContactController);
router.get("/getContact",getContactController);
router.delete("/deleteContact", deleteContactController);



export {router};