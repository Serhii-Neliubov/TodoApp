import React from "react";
import MyButton from "../UI/MyButton/MyButton";
import { useNavigate } from "react-router-dom";

const PostItem = ({ post, number, removePost }) => {
  const navigate = useNavigate();

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => navigate(`/posts/${post.id}`)}>
          Открыть
        </MyButton>
        <MyButton onClick={() => removePost(post)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
