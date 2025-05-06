// dependecy
import express from "express";
import { deleteBlogController, getBlogController, getBlogsController, postBlogController } from "../Controller/blogController.js";
import client from "../mongodb/mongodbConfig.js";



// import { postContactModel } from "../models/contact/ContactModel";
// import {postContactController} from '../controllers/ContactController'

// routes
const router = express.Router();

router.get("/getBlogs",getBlogsController);
router.get("/getBlog",getBlogController);
router.post("/postBlog", postBlogController);
router.delete("/deleteBlog", deleteBlogController)


router.put("/update_blog_views", async (req, res) => {
    const { id } = req.query
    // console.log(id);
    const views = req.body.views
    // console.log("views",views);
    // try {
    //     const data = await postPackageDataModel(packageInfo);
    //     res.send(data)
    // } catch (error) {
    //     res.status(400).send(error)
    // }
    await client.connect();
    const blogCollection=client.db('marketing-tool').collection('blog')
    // const needUpdate = await blogCollection.findOne({ _id: id });
    // updaate views
    const options = { upsert: true };
    const updateDoc = {
         $set: {views:views},
     };
    const result = await blogCollection.updateOne({ _id: id }, updateDoc);
    // console.log(result);
    res.send(result)
});

// router.get("/specific_package",getSpecificPackageController)

export {router};