import { generatePositions } from "../helpers/positions.js";
import Board from "../models/board.model.js";

export const generateBoard = async (req, res) => {
  const { size, raffleId } = req.body;
  try {
    const positions = await generatePositions(size);

    const newBoard = new Board({
      raffleId: raffleId,
      positions,
    });
    const saved = await newBoard.save();
    res.status(201).json(saved._id);
  } catch (error) {
    res.status(400).send(error);
  }
};
