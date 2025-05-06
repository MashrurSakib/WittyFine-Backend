// dependecy
import express from "express";
import { getNewsLetterController, postNewsLetterController } from "../Controller/newsletterController.js";





// routes
const router = express.Router();

router.post("/create",postNewsLetterController);
router.get("/read",getNewsLetterController);



export {router};