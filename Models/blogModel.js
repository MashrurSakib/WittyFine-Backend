import client from "../mongodb/mongodbConfig.js";


export const getBlogsModel = async() => {
    await client.connect();
    const blogCollection=await client.db('marketing-tool').collection('blog')
    const result = await blogCollection.find({}).project({ card_text: 1, _id: 1, title: 1, views: 1 }).toArray();
    return result
}
 
export const getBlogModel = async (id) => {
    await client.connect();
    const blogCollection=await client.db('marketing-tool').collection('blog')
    const result = await blogCollection.findOne({ _id: id.id });
    console.log(result);
    return result
}
 
export const postBlogModel = async(blog) => {
    await client.connect();
    const blogCollection=await client.db('marketing-tool').collection('blog')
    const result = await blogCollection.insertOne(blog)
    return result
 }
export const deleteBlogModel = async (id) => {
    await client.connect();
    const blogCollection = await client.db('marketing-tool').collection('blog')
    const result = await blogCollection.deleteOne({ _id: id })
    return result
}
