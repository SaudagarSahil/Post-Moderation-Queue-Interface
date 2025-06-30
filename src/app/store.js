import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import { loadState, saveState } from "./localStorage";

const persistedStore = loadState();

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  preloadedState: persistedStore,
});

store.subscribe(() => {
  saveState({
    posts: store.getState().posts,
  });
});

export default store;