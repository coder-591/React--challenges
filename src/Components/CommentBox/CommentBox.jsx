import Comments from "./Comments";

const CommentBox = ({setReplyId}) => {

  
  return (
    <>
      <div className="px-6">
        <div className=" rounded-2xl border border-borderColor h-80 overflow-scroll scrollbar-none mt-4">
          <Comments setReplyId = {setReplyId} />
        </div>
      </div>
    </>
  );
};

export default CommentBox;
