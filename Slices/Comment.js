import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};
console.log(initialState);


export const commentSlice = createSlice({
  name: "Comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      console.log(state.comments);
      
      state.comments.push(action.payload);
    },
  },
});

// console.log(commentSlice.reducer);

export const { addComment } = commentSlice.actions;

export default commentSlice.reducer;
