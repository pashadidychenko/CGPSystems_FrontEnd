import * as React from "react";
import { hot } from "react-hot-loader";
import "./../assets/scss/App.scss";
import Input from "./Input";
import TodoList from "./TodoList";

import { StoreProvider } from "../store/useStore";

function App() {
  return (
    <StoreProvider>
      <Input />
      <TodoList />
    </StoreProvider>
  );
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
