function randomPromise(info, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve(info);
      } else {
        reject(`${info} not found`);
      }
    }, delay);
  });
}
function getProduct() {
  return randomPromise("product information", 1000);
}
function getUser() {
  return randomPromise("user information", 2000);
}
function getPayment() {
  return randomPromise("payment information", 3000);
}
Promise.all([getProduct(), getUser(), getPayment()])
  .then(([product, user, payment]) => {
    console.log("data received:");
    console.log("product:", product);
    console.log("user:", user);
    console.log("payment:", payment);
  })
  .catch(() => {
    console.log("order processing failed");
  });