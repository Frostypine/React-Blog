//contentSlice.js
//React Blog Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald 

import {createSlice} from '@reduxjs/toolkit';
import data from '../App/components/data';
let content = []
let storedContent = JSON.parse(localStorage.getItem("storedContent"));
storedContent ? content = storedContent :  content = data; 

export const contentSlice = createSlice ({
    name: 'content',
    initialState: {
      content:   data
    },
    reducers: {
       addContent: (state, action) => {
        console.log(action.payload); 
        state.content = action.payload;
        localStorage.setItem('storedContent', JSON.stringify(state.content));
    },
    deleteContent: (state,action) => {
      state.content.splice(action.payload, 1)
      localStorage.setItem("storedContent",JSON.stringify(state.content))
    }
  }
})

export const {addContent,deleteContent} = contentSlice.actions;
export const selectContent = (state) => state.content.content;
export default contentSlice.reducer; 