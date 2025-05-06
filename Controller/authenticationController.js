import { getAdminPasswordModel } from "../Models/authentication.js";
import bcrypt from 'bcryptjs';

export const getAdminPasswordController = async (req, res) => {
    const auth=req.body
    try {
        const data = await getAdminPasswordModel(auth.email);
        const isSame=await bcrypt.compare(auth.password, data.password)
        if (isSame) {
            res.status(200).send({"message":"password matched"})
        } else {
            res.status(401).send({"message":"password not matched"})
        }
    
        
    } catch (error) {
        res.status(400).send({"error":"error happend"})
    }
}
export const findAdminEmailController = async (req, res) => {
    const {email} =req.query
    try {
        const data = await getAdminPasswordModel(email);
        if (data !==null) {
            res.status(200).send(data)
        } else {
            res.status(401).send({"message":"password not matched"})
        }
    
        
    } catch (error) {
        res.status(400).send({"error":"error happend"})
    }
}