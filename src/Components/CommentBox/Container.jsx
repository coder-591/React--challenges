import AddComment from "./AddComment";
import CommentBox from "./CommentBox";


const Container = () => {
  return (
    <div className="bg-cardColor border border-borderColor rounded-2xl h-140 m-4">
     <AddComment />
     <CommentBox/>
     
    
    </div>
  );
};

export default Container;
