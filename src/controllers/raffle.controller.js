import { generatePositions } from "../helpers/positions.js";
import { createUniqueID } from "../helpers/uid.js";
import Board from "../models/board.model.js";
import Raffle from "../models/raffle.model.js";
export const createRaffle = async (req, res) => {
  const {
    name,
    description,
    date,
    price,
    image,
    state,
    winner,
    owner,
    lottery,
    category,
  } = req.body;
  try {
    const newRaffle = new Raffle({
      name,
      description,
      date,
      price,
      image,
      state,
      winner,
      owner,
      lottery,
      category,
      path : createUniqueID(),
    });
    await newRaffle.save();

    const positions = await generatePositions(100);

    const newBoard = new Board({
      raffleId: newRaffle._id,
      positions,
    });

    await newBoard.save();

    res.status(201).send({
     message : "Sorteo creado exitosamente", 
     id :  newRaffle._id
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
