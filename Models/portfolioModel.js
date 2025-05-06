import client from "../mongodb/mongodbConfig.js";


export const getAllPortfolioModel = async () => {
    await client.connect();
    const portfolioCollection = await client.db('marketing-tool').collection('Portfolio')
    const result = await portfolioCollection.find({}).toArray()
    return result;
}
export const getSpecificPortfolioModel = async (name) => {
    await client.connect();
    const portfolioCollection = await client.db('marketing-tool').collection('Portfolio')
    const result = await portfolioCollection.findOne(name)
    console.log(result);
    return result;
}
export const postPortfolioModel = async (portfolio) => {
    await client.connect();
    const portfolioCollection = await client.db('marketing-tool').collection('Portfolio')
    const result = await portfolioCollection.insertOne(portfolio)
    return result
}
