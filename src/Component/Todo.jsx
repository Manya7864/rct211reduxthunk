import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodoAPI } from "../TodoReducer/Action";
import TodoList from "../Component/Todolist";

const Todo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoAPI());
  }, [dispatch]);
  return (
    <div>
      <TodoList></TodoList>
    </div>
  );
};

export default Todo;