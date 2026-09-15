import {
  ArrowDownUp,
  ChevronDown,
  Image,
  Link,
  MessageCircle,
  Smile,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { addComment } from "../../../Slices/Comment.js";
import { useState } from "react";

const AddComment = () => {
  const dispatch = useDispatch();
  const [userComment, setUserComment] = useState("");
  
  

  const clickHandler = () => {
    dispatch(addComment(userComment));
    setUserComment("");
  };

  return (
    <>
      <div className="px-6 mt-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <MessageCircle size={20} />
            <h1 className="font-semibold text-lg">Comments</h1>
          </div>
          <p className="bg-gray-300 text-sm text-bodyTextColor font-medium rounded-2xl px-4 py-1">
            {" "}
            12 Comments
          </p>
        </div>
        <div className="border border-borderColor px-4 py-2 rounded-xl flex items-center gap-2 text-bodyTextColor">
          <ArrowDownUp size={20} />
          Newest First
          <ChevronDown size={20} />
        </div>
      </div>

      <div className="mt-6">
        <div className="px-6">
          <textarea
            value={userComment}
            onChange={(e) => setUserComment(e.target.value)}
            className=" outline-0 scrollbar-none w-full resize-none text-sm font-medium h-14 border border-borderColor rounded-xl px-4 py-2"
            placeholder="Write a comment..."
          
          />
          <div className="flex items-center justify-between px-4 mt-2">
            {/* icons */}
            <div className="flex items-center gap-2">
              <Smile size={20} color="#374151" />
              <Image size={20} color="#374151" />
              <Link size={20} color="#374151" />
            </div>
            <button
              onClick={clickHandler}
              className=" cursor-pointer outline-0  shadow-sm px-6 rounded-xl py-2 bg-purpleColor text-white font-semibold text-sm"
            >
              Post
            </button>
          </div>
        </div>
      </div>
      {/* <hr className="mt-4 text-borderColor" /> */}
    </>
  );
};

export default AddComment;
