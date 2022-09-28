import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";

// import { removeTodo } from "../../store/actions/creators/todo";
import { toggleTodo } from "../../store/actions/thunks/todo";
import { filterValueSelector } from "../../store/selectors/filter";
import { FILTER_YES, FILTER_NO } from "../../store/actions/types/filter";

import styles from './index.module.css';

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const filterValue = useSelector(filterValueSelector);

  const toggleTodoItem = () => {
    dispatch(toggleTodo(todo.id, !todo.completed));
  }

  // const removeTodoItem = (e) => {
  //   e.stopPropagation();
  //   dispatch(removeTodo(todo.id));
  // }

  const defineHiddenTodos = (complete, filter) => {
    return (complete && (filter === FILTER_NO)) || (!complete && (filter === FILTER_YES));
  }

  return (
    <li
      className={ cx({
        [styles.item]: true,
        [styles['item_hidden']]: defineHiddenTodos(todo.completed, filterValue),
      })}
      onClick={toggleTodoItem}>
      {todo.completed ? "👌" : "👋"}{" "}
      <span
        className={cx({
          [styles.completed]: todo.completed,
        })}
      >
        {todo.title}
      </span>
      {/* <button onClick={removeTodoItem}>🗑</button> */}
    </li>
  );
};