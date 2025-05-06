import client from "../mongodb/mongodbConfig.js";


export const getFaqsModel = async() => {
    await client.connect();
    const faqCollection=await client.db('marketing-tool').collection('FAQ')
    const result =await faqCollection.find({}).toArray()
    return result;
 }
export const postFAQModel = async(faq) => {
    await client.connect();
    const faqCollection = await client.db('marketing-tool').collection('FAQ')
    console.log(faqCollection);
    const result =await faqCollection.insertOne(faq)
    return result;
 }
