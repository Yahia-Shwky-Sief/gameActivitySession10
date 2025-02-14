//integrate all functions here
import { init_game } from "./init_game.module.js";
import { playerMovement } from "./playerMovement.module.js";
import { calculateScore } from "./calculateScore.module.js";

init_game().then(() => {
  playerMovement().then(() => {
    calculateScore().then(() =>{
        console.log("All functions are integrated successfully!");
    });
  });
});
