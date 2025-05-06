// dependecy
import express from "express";
import { getServiceController, getServicesController, postServiceController } from "../Controller/serviceController.js";



// routes
const router = express.Router();

router.get("/getServices",getServicesController);
router.get("/getService",getServiceController);
router.post("/postService",postServiceController);



export {router};