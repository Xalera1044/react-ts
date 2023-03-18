import TodoItem from './Todoitem';
import Todo from '../Models/todo';
import React from 'react';
import classes from './Todos.module.css'
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
