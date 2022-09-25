import React from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";

import { toggleTodo, removeTodo } from "../../store/actions/creators/todo";

import styles from './index.module.css';

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleTodoItem = () => {
    dispatch(toggleTodo(todo.id));
  }

  const removeTodoItem = () => {
    dispatch(removeTodo(todo.id));
  }

  return (
    <li className={styles.item} onClick={toggleTodoItem}>
      {todo.complete ? "👌" : "👋"}{" "}
      <span
        className={cx({
          [styles.completed]: todo.complete,
        })}
      >
        {todo.content}
      </span>
      <button onClick={removeTodoItem}>🗑</button>
    </li>
  );
};