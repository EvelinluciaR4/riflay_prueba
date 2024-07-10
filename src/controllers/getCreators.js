import Creators from "../models/user.model.js";
export async function getCreators(req, res) {
    try {
        const creators = await Creators.find();
        res.status(200).send(creators);
    } catch (error) {
        res.status(500).send({
            message: "Error al obtener los creadores",
            error: error
        });
    }
}