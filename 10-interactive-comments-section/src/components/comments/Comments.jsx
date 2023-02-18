import CommentContent from "./CommentContent";
import CommentNumber from "./CommentNumber";
import style from "./Comments.module.css";

const Comments = () => {
  return (
    <div className={style.box}>
      <CommentNumber />
      <CommentContent />
    </div>
  );
};

export default Comments;
