import { CornerUpLeft, Ellipsis, ThumbsUp, User } from "lucide-react";
import { useSelector } from "react-redux";
const Comments = ({ setReplyId }) => {
  const commentData = useSelector((state) => state.commentReducer.comments);

  const sendId = (replyId) => {
    setReplyId((prev) => ({ ...prev, id: replyId,focusInput:!prev.focusInput }));
  };

  return (
    <>
      <div className="flex flex-col gap-4 my-4">
        {commentData?.map((data) => (
          <div
            key={data.id}
            className="h-25 mx-6 bg-cardColor shadow-lg border border-borderColor rounded-2xl"
          >
            <div className="flex items-center justify-between px-6 py-2">
              <div className="flex items-center gap-4">
                <User size={40} />
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 font-medium">
                    <h1>User</h1>
                    <p className="text-bodyTextColor text-sm">2 hours</p>
                  </div>

                  <p className="font-medium text-sm te">{data.text}</p>
                  {/* icons */}
                  <div className="flex items-center gap-2 cursor-pointer">
                    <span className="flex items-center gap-2">
                      <ThumbsUp size={20} /> 10{" "}
                    </span>
                    <span
                      onClick={() => sendId(data.id)}
                      className="flex items-center gap-2"
                    >
                      reply <CornerUpLeft size={20} />
                    </span>
                  </div>
                </div>
              </div>
              <Ellipsis size={20} className="cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Comments;
