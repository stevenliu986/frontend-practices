import style from "./CommentNumber.module.css";

const CommentNumber = () => {
  return (
    <div className={style.box}>
      <p className={style.symbol}>+</p>
      <p className={style.count}>12</p>
      <p className={style.symbol}>-</p>
    </div>
  );
};
export default CommentNumber;
