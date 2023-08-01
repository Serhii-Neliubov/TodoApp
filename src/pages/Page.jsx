import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import useFetching from "../hooks/useFetching";
import MyLoader from "../UI/MyLoader/MyLoader";
import PageComment from "../components/PageComment";

const Page = () => {
  const params = useParams();

  const [post, setPost] = useState("");
  const [comments, setComments] = useState([]);

  const [getPageId, loading, error] = useFetching(async () => {
    const response = await PostService.getPostById(params.id);
    setPost(response.data);
  });

  const [getPageComment, loadingComment, errorComment] = useFetching(
    async () => {
      const response = await PostService.getPostByComment(params.id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    getPageId();
  }, []);

  useEffect(() => {
    getPageComment();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <MyLoader />
      ) : (
        <>
          <h1 style={{ textAlign: "center" }}>
            Вы открыли страницу поста номер {post.id}!
          </h1>
          <p style={{ textAlign: "center" }}>
            {post.id}. {post.title}
          </p>
          <h2 style={{ textAlign: "center" }}>Коментарии:</h2>
          <hr style={{ margin: "20px 0" }} />
        </>
      )}
      {comments.map((comment) => (
        <PageComment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Page;
