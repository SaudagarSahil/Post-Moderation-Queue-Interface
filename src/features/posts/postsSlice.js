import { createSlice } from "@reduxjs/toolkit";
import { dummyPosts } from "./dummyPosts";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    allPosts: dummyPosts,
    filter: "pending",
    selectedPostIds: [],
  },
  reducers: {
    approvePost: (state, action) => {
      const post = state.allPosts.find((p) => p.id === action.payload);
      if (post) post.status = "approved";
      if (state.selectedPostIds.includes(post.id))
        state.selectedPostIds = state.selectedPostIds.filter((pid) => pid !== post.id);
    },
    rejectPost: (state, action) => {
      const post = state.allPosts.find((p) => p.id === action.payload);
      if (post) post.status = "rejected";
      if (state.selectedPostIds.includes(post.id))
        state.selectedPostIds = state.selectedPostIds.filter((pid) => pid !== post.id);
    },
    setPostPending: (state, action) => {
      const post = state.allPosts.find((p) => p.id === action.payload);
      if (post) post.status = "pending";
    },
    batchApprove: (state) => {
      state.selectedPostIds.forEach((id) => {
        const post = state.allPosts.find((p) => p.id === id);
        if (post) post.status = "approved";
      });
      state.selectedPostIds = [];
    },
    batchReject: (state) => {
      state.selectedPostIds.forEach((id) => {
        const post = state.allPosts.find((p) => p.id === id);
        if (post) post.status = "rejected";
      });
      state.selectedPostIds = [];
    },
    batchSetPending: (state) => {
      state.selectedPostIds.forEach((id) => {
        const post = state.allPosts.find((p) => p.id === id);
        if (post) post.status = "pending";
      });
      state.selectedPostIds = [];
    },
    toggleSelectPost: (state, action) => {
      const id = action.payload;
      const exists = state.selectedPostIds.includes(id);
      state.selectedPostIds = exists
        ? state.selectedPostIds.filter((pid) => pid !== id)
        : [...state.selectedPostIds, id];
    },
    selectAll: (state) => {
      const filtered = state.allPosts.filter((p) => p.status === state.filter);
      state.selectedPostIds = filtered.map((p) => p.id);
    },
    clearSelected: (state) => {
      state.selectedPostIds = [];
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
      state.selectedPostIds = [];
    },
  },
});

export const {
  approvePost,
  rejectPost,
  setPostPending,
  batchApprove,
  batchReject,
  batchSetPending,
  toggleSelectPost,
  selectAll,
  clearSelected,
  setFilter,
} = postsSlice.actions;

export default postsSlice.reducer;
