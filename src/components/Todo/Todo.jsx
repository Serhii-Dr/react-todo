import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoForm from './Form/TodoForm';
import TodoItem from './Item/TodoItem';

import styles from './Todo.module.css';

function Todo() {
  const [todos, setTodos] = useState(() => {
    const todosFromStorage = JSON.parse(localStorage.getItem('todos'));
    return todosFromStorage ? todosFromStorage : [];
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodohandler = (todo) => {
    setTodos([...todos, { id: uuidv4(), ...todo }]);
  };

  const errorhandler = (value) => {
    setError(value);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todoItem) => todoItem.id !== id));
  };

  if (error) {
    setTimeout(() => {
      setError(false);
    }, 2000);
  }

  return (
    <div className={styles.container}>
      <h2 className={styles['todo-title']}>Shopping List</h2>
      <TodoForm onAddTodo={addTodohandler} onError={errorhandler} />
      <h3 className={styles['todo-error-message']}>
        {error && 'Please fill in both fields!'}
      </h3>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            priority={todo.priority}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Todo;
