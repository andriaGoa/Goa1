function callBack(orderId) {
  console.log(orderId);
}

class OrderManager {
  constructor() {
    this.activeOrders = new Map();
    this.completedOrders = new Set();
  }

  processOrder(orderId, customerName, callback) {
    this.activeOrders.set(orderId, customerName);
    console.log(`New order received: #${orderId} from ${customerName}`);

    setTimeout(() => {
      const customer = this.activeOrders.get(orderId);
      this.activeOrders.delete(orderId);
      this.completedOrders.add(customer);

      callback(orderId);
      this.printStatus();
    }, 3000);
  }

  printStatus() {
    console.log("\n Active Orders:");
    for (let [orderId, customerName] of this.activeOrders) {
      console.log(`  Order #${orderId}: ${customerName}`);
    }

    console.log("\n Completed Orders:");
    for (let customerName of this.completedOrders) {
      console.log(`  ${customerName}`);
    }
    console.log('-----------------------------');
  }
}

const manager = new OrderManager();

manager.processOrder(1, "Temo", callBack);
manager.processOrder(2, "Nino", callBack);
manager.processOrder(3, "Giorgi", callBack);