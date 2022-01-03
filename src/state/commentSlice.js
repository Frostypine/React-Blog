//commentSlice.js
//React Blog Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald 
import {createSlice} from '@reduxjs/toolkit';
import data from '../App/components/data';

let comments =[];
let storedComments = JSON.parse(localStorage.getItem("storedComments"));
if (storedComments) comments = storedComments; 
if(!comments) {
comments = data; 
  localStorage.setItem("comments", JSON.stringify(comments))
}

export const commentSlice = createSlice ({
    name: 'comments',
    initialState: {
      comments:   comments
    },
    reducers: {
       addComments: (state, action) => {
        console.log(action.payload); 
        state.comments = action.payload;
        localStorage.setItem('storedComments', JSON.stringify(state.comments));
    },
    deleteComments: (state,action) => {
      state.comments.splice(action.payload, 1)
      localStorage.setItem("storedComments",JSON.stringify(state.comments))
    }
  }
})

export const {addComments,deleteComments} = commentSlice.actions;
export const selectComments = (state) => state.comments.comments;
export default commentSlice.reducer; 