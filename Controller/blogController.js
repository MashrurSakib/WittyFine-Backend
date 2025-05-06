import { deleteBlogModel, getBlogModel, getBlogsModel, postBlogModel } from "../Models/blogModel.js";


export const getBlogsController = async (req, res) => {

    try {
        const data =await getBlogsModel();
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({"error":"error happend"})
    }
}
export const getBlogController = async (req, res) => {
    const id=req.query
    try {
        const data = await getBlogModel(id)
        console.log(data);
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({"error":"error happend"})
    }
}
export const postBlogController = async (req, res) => {
    const blog=req.body
    try {
        const data =await postBlogModel(blog);
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({"error":"error happend"})
    }
}
export const deleteBlogController = async (req, res) => {
    try {
        const id = req.query.id
        const data = await deleteBlogModel(id);
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({ "error": "error deleting blog" })
    }
}
