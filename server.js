// imports
import express from "express";
import bcrypt from 'bcryptjs';
import cors  from "cors";
import * as dotenv from 'dotenv';
import bodyParser from "body-parser";
import helmet from "helmet";

// config
dotenv.config();
const port = process.env.PORT || 1823;

// create express server
const server = express();
server.use(helmet());

// routes
import { router as contactRoutes } from "./routes/contactroutes.js";
import { router as serviceRoutes } from "./routes/ServiceRoute.js";
import { router as blogRoutes } from "./routes/blogRoute.js";
import { router as faqRoutes } from "./routes/faqRoutes.js";
import { router as portfolioRoutes } from "./routes/portfolioRoute.js";
import { router as newsLetterRoutes } from "./routes/newsletterRoute.js";
import { router as authenticationRoutes } from "./routes/authenticationRoute.js";



// requests
server.use(cors());
server.use(express.json());

server.use("/api/contact", contactRoutes)
server.use("/api/services", serviceRoutes)
server.use("/api/faq", faqRoutes)
server.use("/api/blog", blogRoutes)
server.use("/api/newsletter",newsLetterRoutes)
server.use("/api/portfolio", portfolioRoutes)
server.use("/api/authentication",authenticationRoutes)


server.listen(port, ()=>{
    console.log("Connected to port " + port);
})



// password hashing using bycrypt js
// this is how you can encrpyt a password
// const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync("mashrur@123", salt);
// console.log(hash)
