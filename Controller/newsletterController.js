import { getNewsLetterModel, postNewsLetterModel } from "../Models/newsletterModel.js";



export const getNewsLetterController = async (req, res) => {

    try {
        const data =await getNewsLetterModel();
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({"error":"error happend"})
    }
}

export const postNewsLetterController = async (req, res) => {
    const email=req.body
    try {
        const data =await postNewsLetterModel(email)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({"error":"error happend"})
    }
}
