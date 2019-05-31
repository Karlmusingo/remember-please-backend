import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import reduxDevToolsExt from "redux-devtools-extension";

const initialState = {
  events: {
    todays: {
      events: [],
      eventsCount: 0
    },
    thisWeek: {
      events: [],
      eventsCount: 0
    },
    other: {
      events: [],
      eventsCount: 0
    }
  }
};

const middleware = applyMiddleware(thunk);
// const initialState = {
//   count: 3
// };
const reducer = (state = initialState, { type, payload }) => {
  console.log("type:", type);
  if (type === "FETCH_EVENTS") state = { ...state, events: payload };
  if (type === "ADD_EVENT") state = { ...state, events: payload };
  return state;
};
// const messageReducer = (state = initialState, action) => {};
// const reducers = combineReducers({
//   events: eventReducer,
//   messages: messageReducer
// });
const store = createStore(reducer, initialState, middleware);

export default store;
