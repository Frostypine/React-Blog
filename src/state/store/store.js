//store.js
//React Blog Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald 

import {configureStore } from '@reduxjs/toolkit';
import contentReducer from '../contentSlice'; 
import commentReducer from '../commentSlice';

export const store = configureStore({
    reducer:{
        content: contentReducer,
        comment: commentReducer,
    }
});