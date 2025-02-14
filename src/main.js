//integrate all functions here
import { init_game } from "./init_game.js";
import { playerMovement } from "./player_movement.js";
import { calculateScore } from "./calculate_score.js";

init_game().then(() => {
  playerMovement().then(() => {
    calculateScore().then(() =>{
        console.log("All functions are integrated successfully!");
    });
  });
});
