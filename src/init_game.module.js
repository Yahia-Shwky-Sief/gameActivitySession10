export function init_game() {
    return new Promise((resolve) => {
        setTimeout(() => {
          console.log("The game is initialized");
          resolve();
        }, 1000);
      });
}