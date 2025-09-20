const stepPromise = new Promise((resolve) => {
    resolve("Step 1")
})
.then(step => {
    console.log(step)
    return "Step 2"
})
.then(step =>{
    console.log
    return "Step 3"
})
.than(step => console.log(step))