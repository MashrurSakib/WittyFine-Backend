import { deleteContactModel, getContactModel, postContactModel } from "../Models/ContactModels.js";


export const postContactController = async (req, res) => {
    const contact=req.body
    try {
        const data =await postContactModel(contact);
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({"error":"error happend"})
    }
}
export const getContactController = async (req, res) => {

    try {
        const data =await getContactModel();
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({"error":"error happend"})
    }
}
export const deleteContactController = async (req, res) => {
    const { id } = req.query
    try {
        const data = await deleteContactModel({ _id: id });
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({"error":"error happend"})
    }
}
