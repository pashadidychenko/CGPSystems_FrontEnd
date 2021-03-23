import React, { useState, useEffect, useCallback } from "react";
import { getTodo, getTodoCategory, getTodoByCategory } from "./servise";
import { makeStyles } from "@material-ui/core/styles";
import TodoForm from "./TodoForm";
import { useStore } from "../store/useStore";
import {
  Select,
  Button,
  Paper,
  InputLabel,
  MenuItem,
  FormControl,
} from "@material-ui/core/";
import "./../assets/scss/App.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      height: 400,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  },
}));

function TodoList() {
  const classes = useStyles();
  const { state, dispatch } = useStore();
  const open = useCallback(() => dispatch({ type: "open" }), [dispatch]);
  const updateTodo = useCallback(() => dispatch({ type: "updateTodo" }), [
    dispatch,
  ]);
  const [todoList, setTodoList] = useState([]);
  const [todoCategory, setTodoCategory] = useState([]);
  const [chooseCategory, setChooseCategory] = useState("");
  const [todoData, setTodoData] = useState({});
  useEffect(async () => {
    setTodoList(await getTodo());
    setTodoCategory(await getTodoCategory());
  }, []);
  async function handleChange(e) {
    setChooseCategory(e.target.value);
    setTodoList(await getTodoByCategory(e.target.value));
  }
  function handleEditTodo(todo) {
    updateTodo();
    open();
    setTodoData(todo);
  }
  return (
    <div>
      <TodoForm todoData={todoData} />
      <h1>Todo list</h1>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Choose Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          style={{ margin: 8, width: 410 }}
          value={chooseCategory}
          onChange={handleChange}
          label="Choose Category"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {todoCategory.map((category, index) => (
            <MenuItem value={category} key={index}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <ul className={classes.root}>
        {todoList.map((todo) => (
          <Paper elevation={3} key={todo._id}>
            <div className="cardContainer">
              <p>
                <span className="todoTitle">Task name: </span> {todo.name}
              </p>

              <p>
                <span className="todoTitle">Date: </span>
                {todo.date}
              </p>
              <p>
                <span className="todoTitle">Category: </span>
                {todo.category}
              </p>
              <h4>Description:</h4>
              <p className="todoText">{todo.description}</p>
              <Button
                variant="contained"
                color="primary"
                id="todoFormButtom"
                className="todoFormButtom"
                onClick={() => handleEditTodo(todo)}
              >
                Edit todo
              </Button>
            </div>
          </Paper>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
