 let orderId = 1;

  function createOrder() {
    const nameInput = document.getElementById("name");
    const foodInput = document.getElementById("food");
    const name = nameInput.value.trim();
    const food = foodInput.value.trim();

    if (!name || !food) return;

    const activeList = document.getElementById("activeOrders");
    const completedList = document.getElementById("completedOrders");

    const li = document.createElement("li");
    li.id = `order-${orderId}`;
    li.textContent = `${orderId}. [${name}, ${food}]     time`;

    activeList.appendChild(li);

    const currentId = orderId;
    orderId++;

    setTimeout(() => {
      activeList.removeChild(li);

      const completedItem = document.createElement("li");
      completedItem.textContent = `${currentId}. ${name}`;
      completedList.appendChild(completedItem);
    }, 3000);

    nameInput.value = "";
    foodInput.value = "";
  }