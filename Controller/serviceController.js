import { getServiceModel, getServicesModel, postServiceModel } from "../Models/serviceModel.js";

export const getServicesController=async(req, res) => {
    try {
        const data =await getServicesModel();
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}
export const getServiceController = async (req, res) => {
    const id = req.query.id
    try {
        const data =await getServiceModel(id);
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}
export const postServiceController = async (req, res) => {
    const service = req.body
    try {
        const data =await postServiceModel(service)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}