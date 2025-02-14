//integrate all functions here
import { init_game } from "./init_game.module.js";
import { playerMovement } from "./playerMovement.module.js";
import { calculateScore } from "./calculateScore.module.js";
async function init(){
  await init_game();
  await playerMovement();
  await calculateScore();
  console.log("All functions are integrated successfully!");
}
init();
