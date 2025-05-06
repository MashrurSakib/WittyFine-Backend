import { getFaqsModel, postFAQModel } from "../Models/faqModel.js"


export const getFAQController=async(req, res) => {
    try {
        const data =await getFaqsModel()
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}
export const postFAQController = async (req, res) => {
    const faq=req.body
    try {
        const data =await postFAQModel(faq)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}