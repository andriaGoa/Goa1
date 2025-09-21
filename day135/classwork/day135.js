const mainTask = new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 10 + 1) * 1000;

    setTimeout(() => {
        resolve(`main task finished in ${delay / 1000} seconds`);
    }, delay);
})
const timeoutTask = new Promise((reject) => {
    setTimeout(() => {
        reject(new Error("the process took more than 5 seconds"));
    }, 5000);
})
Promise.race([mainTask, timeoutTask])
    .then(result =>{
        console.log("the process was sucsesfull", result)
    })
    .catch(error =>{
        console.log("error", error.message)
    });