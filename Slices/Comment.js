import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

export const commentSlice = createSlice({
  name: "Comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      const commentObj = {
        id: nanoid(),
        text: action.payload,
        replies: [],
      };
      state.comments.push(commentObj);
    },

    addReplies: (state, action) => {
      const targetComment = state.comments.find(
        (comment) => comment.id === action.payload.id,
      );
      targetComment.replies.push(action.payload.comment);
    },
  },
});


export const { addComment, addReplies } = commentSlice.actions;

export default commentSlice.reducer;
