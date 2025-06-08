    const todoList = document.getElementById('todoList');
    const input = document.getElementById('todoInput');

    const initialTodos = ["Milk", "Sugar", "Butter"];

    initialTodos.forEach(todo => createTodoItem(todo));

    function addTodo() {
      const value = input.value.trim();
      if (value !== "") {
        createTodoItem(value);
        input.value = "";
      }
    }

    function createTodoItem(text) {
      const div = document.createElement('div');
      div.className = 'todo-item';

      const span = document.createElement('span');
      span.textContent = text;

      const btn = document.createElement('button');
      btn.textContent = 'Delete';
      btn.className = 'delete-btn';
      btn.onclick = () => div.remove();

      div.appendChild(span);
      div.appendChild(btn);
      todoList.appendChild(div);
    }