import { createStore } from "redux";
import { jobReducer } from "./reducers";

export const store = createStore(jobReducer);
