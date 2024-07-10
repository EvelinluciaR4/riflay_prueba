import { formatPosition } from "../utils/formatPosition.js";

export const generatePositions = async (size) => {
    const board = Array(size)
    .fill({
      number: "",
      owner: "",
      isAvailable: true,
    })
    .map((_, index) => {
      return {
        number: formatPosition(index),
        owner: "",
        isAvailable: true,
      };
    });
    return board;
};