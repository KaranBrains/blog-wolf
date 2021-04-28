import React, { useReducer } from "react";
import axios from "axios";
import Context from "./Context";
import Reduser from "./Reduser";
import {
  _BASE_URL,
  _CREATE_POST,
  _GET_POSTS,
  _GET_POST,
  _GUEST_BYID,
  _GUEST_INVITE,
} from "../../ApiUrls";

import {
  GET_ALL_POST,
  GET_POST,
  ADD_POST,
  GUEST_BYID,
  GET_UPCOMING_GUEST,
  ERROR,
} from "../Types";

const State = (props) => {
  const initialState = {
    posts: [],
    post: null,
    guest: null,
    invite: null,
    error: null,
  };

  const [state, dispatch] = useReducer(Reduser, initialState);

  // Get Contact,4114
  const getPosts = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.get(_BASE_URL + _GET_POSTS, config);
      console.log(77777, res.data.blogs);
      dispatch({ type: GET_ALL_POST, payload: res.data.blogs });
    } catch (err) {
      console.log(err);
      //   dispatch({ type: ERROR, payload: err.response.msg });
    }
  };

  // Add Contact
  const addPost = async (post) => {
    console.log(post, "post");
    try {
      const res = await axios.post(_BASE_URL + _CREATE_POST, post);
      // if (res.data.status === false) alert(res.data.message);
      dispatch({ type: ADD_POST, payload: res.data.blog });
    } catch (err) {
      console.log(err);
      //   dispatch({ type: ERROR, payload: err.response.msg });
    }
  };

  // Delete Contact
  const getPost = async (id) => {
    try {
      console.log(id, "id...");
      console.log(_BASE_URL + _GET_POST + id);
      axios
        .get(_BASE_URL + _GET_POST + id)
        .then((res) => {
          console.log(res, "hefe");
          dispatch({ type: GET_POST, payload: res.data.blog });
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
      //   dispatch({ type: ERROR, payload: err.response.msg });
    }
  };

  return (
    <Context.Provider
      value={{
        posts: state.posts,
        post: state.post,
        guest: state.guest,
        invite: state.invite,
        error: state.error,
        getPosts,
        getPost,
        addPost,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
