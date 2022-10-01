// import { useEffect } from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import { todosSelector, todosLoadingSelector, todosErrorSelector } from "../../store/selectors/todo";
import { Todo } from "../todo";
// import { fetchTodos } from '../../store/actions/thunks/todo';

import styles from './index.module.css';

import { useGetAllTodosQuery } from "../../services/todo";

export const TodoList = () => {
  // const dispatch = useDispatch();

  // const todos = useSelector(todosSelector);
  // const loading = useSelector(todosLoadingSelector);
  // const error = useSelector(todosErrorSelector);

  const { data, error, isLoading } = useGetAllTodosQuery();

  const isEmptyList = !isLoading && !data?.length;

  // useEffect(() => {
  //   dispatch(fetchTodos());
  // }, []);

  if (isLoading) {
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
      {data.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};