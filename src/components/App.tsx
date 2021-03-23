import * as React from "react";
import { hot } from "react-hot-loader";
import "./../assets/scss/App.scss";
import Input from "./Input";

function App() {
  return (
    <div className="app">
      <Input />
    </div>
  );
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
