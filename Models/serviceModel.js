import { ObjectId } from "mongodb";
import client from "../mongodb/mongodbConfig.js";


export const getServicesModel = async() => {
    await client.connect();
    const serviceCollection=await client.db('marketing-tool').collection('Services')
    const result =await serviceCollection.find({}).toArray()
    return result;
 }
export const getServiceModel = async (id) => {
    await client.connect();
    const serviceCollection=await client.db('marketing-tool').collection('Services')
    const result = await serviceCollection.findOne({ _id: id })
    return result;
 }
export const postServiceModel = async (service) => {
    await client.connect();
    const serviceCollection=await client.db('marketing-tool').collection('Services')
    const result = await serviceCollection.insertOne(service)
    return result;
 }
