import client from "../mongodb/mongodbConfig.js";


export const getNewsLetterModel = async() => {
    await client.connect();
    const newsLetterCollection=await client.db('marketing-tool').collection('newsletter')
    const result =await newsLetterCollection.find({}).toArray()
    return result;
 }
export const postNewsLetterModel = async(email) => {
    await client.connect();
    const newsLetterCollection = await client.db('marketing-tool').collection('newsletter')
    const isExist = await newsLetterCollection.findOne(email)
    console.log(isExist);
    if (isExist===null) {   
        const result = await newsLetterCollection.insertOne(email)
        return result;
    } else {
        return { 'isExist': true }
    }
    
 }
