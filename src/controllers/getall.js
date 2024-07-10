import Raffle from "../models/raffle.model.js";
export const getAllRaffles = async (req, res) => {
  try {
    const raffles = await Raffle.find();
    res.status(200).json(raffles);
  } catch (error) {
    res.status(400).send(error);
  }
};
