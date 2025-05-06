// dependecy
import express from "express";
import { findAdminEmailController, getAdminPasswordController } from "../Controller/authenticationController.js";


// routes
const router = express.Router();


router.post("/checkPassword", getAdminPasswordController);
router.get("/checkAdmin", findAdminEmailController);



export {router};