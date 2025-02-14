//integrate all functions here
import { init_game } from './init_game.js';
import { playerMovement } from './player_movement.js';

init_game().then(() => {
    playerMovement();
});