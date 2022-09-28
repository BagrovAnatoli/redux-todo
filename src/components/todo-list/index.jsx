import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { todosSelector, todosLoadingSelector, todosErrorSelector } from "../../store/selectors/todo";
import { Todo } from "../todo";
import { fetchTodos } from '../../store/actions/thunks/todo';

import styles from './index.module.css';

export const TodoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector(todosSelector);
  const loading = useSelector(todosLoadingSelector);
  const error = useSelector(todosErrorSelector);

  const isEmptyList = !loading && !todos?.length;

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isEmptyList) {
    return <p>No todos, yay!</p>;
  }

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};