//commentSlice.js
//React Blog Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald 
import { createSlice } from "@reduxjs/toolkit";

let comments = [];

export const commentSlice = createSlice({
  name: "comments",
  initialState: {
  comments: comments,
  },
  reducers: {
    allComments: (state, action) => {
      state.comments = action.payload;
    },
    addComments: (state, action) => {
      state.comments.push(action.payload);
    },
    editComment: (state, action) => {},
    addCommentMessages: (state, action) => {
      const index = state.comments.findIndex((e) => e._id === action.payload._id);
      state.comments[index].messages = action.payload.messages;
    },

    removeComment: (state, action) => {
      state.comments.splice(state.comments.findIndex((e) => e._id === action.payload, 1));
    },
  },
});

export const { allComments, addComments, addCommentMessages, removeComment } = commentSlice.actions;
export const selectComments = (state) => state.comments.comments;
export default commentSlice.reducer;