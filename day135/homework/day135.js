const fastTask = new Promise((resolve) => {
  setTimeout(() => resolve("fast task finished"), 500);
});
const mediumTask = new Promise((resolve) => {
  setTimeout(() => resolve("medium task finished"), 1000);
});
const slowTask = new Promise((resolve) => {
  setTimeout(() => resolve("slow task finished"), 1500);
});
Promise.race([fastTask, mediumTask, slowTask])
  .then((result) => {
    console.log("winner:", result);
  })
  .catch((error) => {
    console.error("error:", error);
  });
