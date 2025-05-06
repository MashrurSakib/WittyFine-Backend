// dependecy
import express from "express";
import { getAllPortfolioController, getSpecificPortfolioController, postPortfolioController } from "../Controller/portfolioController.js";

// routes
const router = express.Router();

router.post("/create", postPortfolioController);
router.get("/allPortfolio", getAllPortfolioController);
router.get("/specificPortfolio", getSpecificPortfolioController);



export { router };