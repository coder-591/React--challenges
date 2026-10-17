import { useState } from "react";
import AddComment from "./AddComment";
import CommentBox from "./CommentBox";

const Container = () => {
  const [replyId,setReplyId] = useState({focusInput:true});
  return (
    <div className="bg-cardColor border border-borderColor rounded-2xl h-140 m-4">
      <AddComment replyId = {replyId} setReplyId = {setReplyId}  />
      <CommentBox setReplyId = {setReplyId} />
    </div>
  );
};

export default Container;
