import React from "react";
// import { useSelector } from "react-redux";
import cx from "classnames";
import { useUpdateTodoMutation } from "../../services/todo";

// import { removeTodo } from "../../store/actions/creators/todo";
// import { toggleTodo } from "../../store/actions/thunks/todo";
// import { filterValueSelector } from "../../store/selectors/filter";
// import { FILTER_YES, FILTER_NO } from "../../store/actions/types/filter";

import styles from './index.module.css';

export const Todo = ({ todo }) => {
  // const dispatch = useDispatch();
  // const filterValue = useSelector(filterValueSelector);

  const [updateTodo, { isLoading }] = useUpdateTodoMutation();

  const { id, title, completed } = todo;
  console.log(todo);

  const toggleTodoItem = () => {
    // dispatch(toggleTodo(todo.id, !todo.completed));
    updateTodo({ id, completed: !completed });
  }

  // const removeTodoItem = (e) => {
  //   e.stopPropagation();
  //   dispatch(removeTodo(todo.id));
  // }

  // const defineHiddenTodos = (complete, filter) => {
  //   return (complete && (filter === FILTER_NO)) || (!complete && (filter === FILTER_YES));
  // }

  /**
   * [styles['item_hidden']]: defineHiddenTodos(completed, filterValue),
   */

  return (
    <li
      className={ cx( styles.item, {
        [styles.loading]: isLoading,
      })}
      onClick={toggleTodoItem}
    >
      {completed ? "👌" : "👋"}{" "}
      <span
        className={cx({
          [styles.completed]: completed,
        })}
      >
        {title}
      </span>
      {/* <button onClick={removeTodoItem}>🗑</button> */}
    </li>
  );
};