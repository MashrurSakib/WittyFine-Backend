import client from "../mongodb/mongodbConfig.js";



export const getAdminPasswordModel = async (email) => {
    await client.connect();
    const adminsCollection=await client.db('marketing-kit').collection('admins')
    const result = await adminsCollection.findOne({ email: email });
    return result
}
export const findAdminEmailModel = async (email) => {
    await client.connect();
    const adminsCollection=await client.db('marketing-kit').collection('admins')
    const result = await adminsCollection.findOne({ email: email });
    return result
}
 