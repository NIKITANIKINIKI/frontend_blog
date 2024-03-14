import { configureStore } from "@reduxjs/toolkit";

import {postsReducer} from "./slice/posts";
import {userReducer} from './slice/login'

const store = configureStore({
  reducer: { 
    posts: postsReducer,
    auth: userReducer
   },
});

export default store;
