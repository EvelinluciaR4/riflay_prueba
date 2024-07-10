import { Router } from "express";
import { registerUser } from "../controllers/register.controller.js";
import { loginController } from "../controllers/login.controller.js";
import { generateBoard } from "../controllers/board.controller.js";
import { saveParticipant } from "../controllers/participant.controller.js";
import { savePurchase } from "../controllers/purchase.controller.js";
import { createRaffle } from "../controllers/raffle.controller.js";
import { rateCreator } from "../controllers/ratecreator.controller.js";
import { getRaffleById } from "../controllers/getboard.controller.js";
import { reservePosition } from "../controllers/reserve.controller.js";
import { getAllRaffles } from "../controllers/getall.js";
import { StrikeAction } from "../controllers/strikeController.js";
import { getCreators } from "../controllers/getCreators.js";
import { getCreatorById } from "../controllers/getCreator.js";
import { getOwnRaffles } from "../controllers/ownraffles.controller.js";
import { getParticipants } from "../controllers/viewParticipants.controller.js";
import { userLogin } from "../controllers/loginm.controler.js";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send({
    message: "Hola by chfelipe",
    lastupdate: "18/06/2024",
  });
});

/* router.post("/banCreator", loginController);

router.post("/createAdmin", loginController);

router.post("/deleteCreator", loginController);

router.post("/suspendCreator", loginController);

router.post("/unsuspendCreator", loginController);

*/

router.get("/getcreator", getCreatorById);

router.get("/getcreators", getCreators);

router.get("/allraffles", getAllRaffles);

router.get('/getraffle', getRaffleById);

 router.get("/ownraffles", getOwnRaffles);

router.post("/login", loginController);

router.post("/loginmoviles", userLogin);

router.post("/strike", StrikeAction);

router.post("/savepurchase", savePurchase);

router.post("/saveparticipant", saveParticipant);

router.post("/createraffle", createRaffle);

router.post("/register", registerUser);

router.put("/ratecreator", rateCreator);

router.put("/reservepositions", reservePosition);

router.get("/viewParticipants", getParticipants);

/* router.post("/todosloscreadores", loginController); */

/* router.update("/ownedpositions",); */

/* router.post("/generateboard", generateBoard); */

/* router.update("/stateraffle",); */

export default router;
