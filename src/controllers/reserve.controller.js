import Board from "../models/board.model.js";

export const reservePosition = async (req, res) => {
  try {
    const { boardId, owner, number, isAvailable } = req.body;

    const board = await Board.findById(boardId);

    if (!board) {
      return res.status(400).json({ message: "Board not found" });
    }

    const position = board.positions.find((pos) => pos.number === number);

    if (!position) {
      return res.status(400).json({ message: "Position not found" });
    }

    if (!position.isAvailable && position.owner !== owner) {
      return res.status(400).json({ message: "Position already reserved" });
    }

    position.owner = owner;
    position.isAvailable = isAvailable === "true";

    await board.save();

    res.status(200).json({ message: "Position reserved" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};