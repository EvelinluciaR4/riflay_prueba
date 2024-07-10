import Raffle from "../models/raffle.model.js";

export const getOwnRaffles = async (req, res) => {
  const { userId } = req.query;
  try {
    const raffles = await Raffle.find({ owner: userId });
    res.status(200).json(raffles);
  } catch (error) {
    res.status(400).json({ message: "Error al obtener los sorteos" });
  }
};
