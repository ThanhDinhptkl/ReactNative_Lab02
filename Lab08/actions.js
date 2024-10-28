export const ADD_JOB = "ADD_JOB";
export const EDIT_JOB = "EDIT_JOB";
export const TOGGLE_JOB = "TOGGLE_JOB";
export const SET_SEARCH_TERM = "SET_SEARCH_TERM";

export const addJob = (title) => ({
  type: ADD_JOB,
  payload: { title },
});

export const editJob = (key, title) => ({
  type: EDIT_JOB,
  payload: { key, title },
});

export const toggleJob = (key) => ({
  type: TOGGLE_JOB,
  payload: key,
});

export const setSearchTerm = (term) => ({
  type: SET_SEARCH_TERM,
  payload: term,
});
