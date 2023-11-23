/* eslint-disable react/prop-types */
import { useState } from 'react';

import styles from './TodoForm.module.css';

function TodoForm({ onAddTodo, onError }) {
  const [todoValue, setTodoValue] = useState({ title: '', priority: '' });

  const onChangeHandler = (event) => {
    setTodoValue({ ...todoValue, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoValue.title !== '' && todoValue.priority !== '') {
      onAddTodo(todoValue);
      setTodoValue({ title: '', priority: '' });
      onError(false);
    } else {
      onError(true);
    }
  };

  return (
    <form className={styles['todo-form']} onSubmit={handleSubmit}>
      <input
        type='text'
        className={styles['todo-input']}
        placeholder='Title...'
        name='title'
        onChange={onChangeHandler}
        value={todoValue.title}
      />
      <input
        type='text'
        className={`${styles['todo-input']} ${styles['todo-input--priority']}`}
        placeholder='Priority'
        name='priority'
        onChange={onChangeHandler}
        value={todoValue.priority}
      />
      <button type='submit' className={styles['todo-submit']}>
        Add
      </button>
    </form>
  );
}

export default TodoForm;
