import app from "./src/config/app.js";
import { connectDB } from "./src/config/db.js";
import { PORT } from "./src/config/config.js";

async function main() {
  try {
  await connectDB(); 
    app.listen(PORT);
    console.log("escuchando en puerto", PORT);
  } catch (error) {
    throw new Error("Algo ha salido mal en la aplicacion");
  }
}
main();