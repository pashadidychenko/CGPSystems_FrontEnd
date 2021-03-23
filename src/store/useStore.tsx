import React, { createContext, useReducer, useContext } from "react";
import { todoInitialState, todoActions } from "./todoStore";
import { statusInitialState, statusActions } from "./statusStore";

const initialState = { ...todoInitialState, ...statusInitialState };
const StoreContext = createContext(initialState);
const Actions = { ...todoActions, ...statusActions };

const reducer = (state, action) => {
  const act = Actions[action.type];
  const update = act(state);
  return { ...state, ...update };
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

const useStore = (store) => {
  const { state, dispatch } = useContext(StoreContext);
  return { state, dispatch };
};

export { StoreProvider, useStore };
