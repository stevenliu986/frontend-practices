import amyrobson from "../../assets/images/avatars/image-amyrobson.png";
import style from "./CommentContent.module.css";

const CommentContent = () => {
  return (
    <div className={style.content}>
      <img src={amyrobson} alt="avatar-amyrobson" />
      <span>amyrobson</span>
      <span>reply</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illum
        voluptates praesentium enim nostrum quis obcaecati maxime voluptatibus
        fugiat nihil molestiae accusamus, fugit commodi exercitationem eum.
        Libero nulla ut explicabo!
      </p>
    </div>
  );
};

export default CommentContent;
