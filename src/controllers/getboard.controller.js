import Board from "../models/board.model.js";
import Raffle from "../models/raffle.model.js";
export const getRaffleById = async (req, res) => {
  const { path } = req.query;
  console.log(path);
  try {
    // busca el sorteo por la ruta relativa
    const raffle = await Raffle.findOne({ path: path });
    if (!raffle) {
      return res.status(404).json({ message: "Sorteo no encontrado" });
    }
    const board = await Board.findOne({ raffleId: raffle._id });

    res.status(200).json({ raffle, board });
  } catch (error) {
    res.status(400).send(error);
  }
};
