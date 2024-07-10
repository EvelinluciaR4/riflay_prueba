import Board from "../models/board.model.js";

export const getParticipants = async (req, res) => {
  const { raffleId } = req.query;
  try {
    const participants = await Board.aggregate([
      { $match: { raffleId: raffleId } },
      { $unwind: "$positions" },
      { $match: { "positions.isAvailable": false } },
      { $group: { _id: "$_id", raffleId: { $first: "$raffleId" }, positions: { $push: "$positions" } } }
    ]);

    console.log(participants);
    res.status(200).json(participants);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error al obtener los participantes" });
  }
};
