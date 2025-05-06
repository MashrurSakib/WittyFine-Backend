import client from "../mongodb/mongodbConfig.js";


export const postContactModel = async(contact) => {
    await client.connect();
    const contactCollection=await client.db('marketing-tool').collection('contact')
    const result =await contactCollection.insertOne(contact);
    return result
 }
export const getContactModel = async() => {
    await client.connect();
    const contactCollection=await client.db('marketing-tool').collection('contact')
    const result =await contactCollection.find({}).toArray();
    return result
 }
export const deleteContactModel = async (id) => {
    console.log(id);
    await client.connect();
    const contactCollection=await client.db('marketing-tool').collection('contact')
    const result = await contactCollection.findOneAndDelete(id);
    console.log(result)
    return result
 }
