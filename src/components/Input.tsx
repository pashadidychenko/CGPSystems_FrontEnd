import React, { useCallback } from "react";
import { Button } from "@material-ui/core/";
import { useStore } from "../store/useStore";
import "./../assets/scss/App.scss";

function Input() {
  const { state, dispatch } = useStore();
  const open = useCallback(() => dispatch({ type: "open" }), [dispatch]);
  const addTodo = useCallback(() => dispatch({ type: "addTodo" }), [dispatch]);

  const handleClickOpen = () => {
    open();
    addTodo();
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add new todo
      </Button>
    </>
  );
}

export default Input;
