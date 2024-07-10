import Creator from "../models/user.model.js";

export const getCreatorById = async (req, res) => {
    try {
        const creator = await Creator.findById(req.query.id);
        res.status(200).send(creator);
    } catch (error) {
        res.status(500).send({
            message: "Error al obtener el creador",
            error: error
        });
    }
}