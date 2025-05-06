import { getAllPortfolioModel, getSpecificPortfolioModel, postPortfolioModel } from "../Models/portfolioModel.js"


export const getAllPortfolioController = async (req, res) => {
    try {
        const data = await getAllPortfolioModel();
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({ "error": "error happend" })
    }
}
export const getSpecificPortfolioController = async (req, res) => {
    const companyName = req.query
    try {
        const data = await getSpecificPortfolioModel(companyName);
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({ "error": "error happend" })
    }
}

export const postPortfolioController = async (req, res) => {
    const portfolio = req.body
    try {
        const data = await postPortfolioModel(portfolio)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({ "error": "error happend" })
    }
}
