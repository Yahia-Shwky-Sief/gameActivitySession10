export function playerMovement() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("The player is moving");
        resolve();
      }, 1000);
    });
  }
  
  playerMovement().then(() => console.log("Movment task completed"));