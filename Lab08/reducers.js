const initialState = {
  jobs: [
    { key: "1", title: "To check email", image: require("./data/iconamoon_edit-bold.png"), checked: true },
    { key: "2", title: "UI task web page", image: require("./data/iconamoon_edit-bold.png"), checked: true },
    { key: "3", title: "Learn javascript basic", image: require("./data/iconamoon_edit-bold.png"), checked: true },
    { key: "4", title: "Learn HTML advance", image: require("./data/iconamoon_edit-bold.png"), checked: true },
    { key: "5", title: "Medical App UI", image: require("./data/iconamoon_edit-bold.png"), checked: true },
    { key: "6", title: "Learn Java", image: require("./data/iconamoon_edit-bold.png"), checked: true },
  ],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_CHECK":
      return {
        ...state,
        jobs: state.jobs.map(job =>
          job.key === action.payload ? { ...job, checked: !job.checked } : job
        ),
      };
    case "ADD_JOB":
      const newJob = {
        key: (state.jobs.length + 1).toString(),
        title: action.payload,
        image: require("./data/iconamoon_edit-bold.png"),
        checked: true,
      };
      return { ...state, jobs: [...state.jobs, newJob] };
    case "EDIT_JOB":
      return {
        ...state,
        jobs: state.jobs.map(job =>
          job.key === action.payload.key ? { ...job, title: action.payload.title } : job
        ),
      };
    default:
      return state;
  }
}
