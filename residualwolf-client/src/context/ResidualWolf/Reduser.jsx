import { GET_ALL_POST, GET_POST, ADD_POST } from "../Types";

export default (state, action) => {
  console.log(...state.posts, "state");
  console.log(action.payload, "reducer");
  switch (action.type) {
    case GET_ALL_POST:
      return {
        ...state,
        posts: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };

    case GET_POST:
      return {
        ...state,
        post: action.payload,
      };
    default:
      return state;
  }
};
