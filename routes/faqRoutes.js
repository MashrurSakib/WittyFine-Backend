// dependecy
import express from "express";
import { getFAQController, postFAQController } from "../Controller/faqController.js";
import client from "../mongodb/mongodbConfig.js";



// routes
const router = express.Router();

router.get("/getFAQs",getFAQController);
router.post("/postFAQ",postFAQController);



export {router};