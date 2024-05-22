import { compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export default function setupStore(): ReturnType<typeof configureStore> {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
  });
}
