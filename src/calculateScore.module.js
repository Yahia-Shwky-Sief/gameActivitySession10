export function calculateScore() {
    return new Promise((resolve) => {
        console.log("Calculating score...");
        setTimeout(() => {
        console.log("Score Calculated successfully!");
        resolve();
        }, 1000);
    });
}
