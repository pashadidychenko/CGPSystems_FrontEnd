import axios from "axios";
axios.defaults.baseURL = "https://cgpsystems.herokuapp.com/todo/";
axios.defaults.headers.post["Content-Type"] = "application/json";

function addNewTodo(todo) {
  axios
    .post("/", todo)
    .then()
    .catch((error) => console.log(error));
}

async function getTodo() {
  return await axios
    .get("/")
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

async function getTodoCategory() {
  return await axios
    .get("/category")
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

async function getTodoByCategory(category) {
  return await axios
    .get(`/${category}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

function updateTodo(id, todo) {
  axios
    .patch(`/${id}`, todo)
    .then()
    .catch((error) => console.log(error));
}

export { addNewTodo, getTodo, getTodoCategory, getTodoByCategory, updateTodo };
