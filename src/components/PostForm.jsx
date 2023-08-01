import React, { useState } from "react";
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";
import "../styles/App.css";

const PostForm = ({ createPost, setInputError, setModalOpen }) => {
  const clearPost = {
    id: Date.now(),
    title: "",
    body: "",
  };

  const [post, setPost] = useState(clearPost);
  const addNewPost = (e) => {
    e.preventDefault();
    if (post.title.trim().length && post.body.trim().length) {
      createPost(post);
      setPost({ title: "", body: "" });
      setInputError(false);
    } else {
      setInputError(true);
    }
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => {
          setPost({ ...post, title: e.target.value });
          setInputError(false);
        }}
        placeholder="Название поста"
      ></MyInput>
      <MyInput
        value={post.body}
        onChange={(e) => {
          setPost({ ...post, body: e.target.value });
          setInputError(false);
        }}
        placeholder="Описание поста"
      ></MyInput>
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};

export default PostForm;
