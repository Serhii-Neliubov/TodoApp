import React, { useEffect, useState } from "react";
import MyModal from "../UI/MyModal/MyModal";
import MyButton from "../UI/MyButton/MyButton";
import MyError from "../UI/MyError/MyError";
import Pagination from "../UI/Pagination/Pagination";
import MyLoader from "../UI/MyLoader/MyLoader";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter";
import PostService from "../API/PostService";
import usePosts from "../hooks/usePosts";
import useFetching from "../hooks/useFetching";
import { getPagesCount } from "../utils/pages";
import MyNote from "../UI/MyNote/MyNote";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState({
    sort: "",
    query: "",
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.query, filter.sort);

  const [fetchPosts, loader, postError] = useFetching(async () => {
    const response = await PostService.getData(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

  function createPost(post) {
    const newPost = {
      id: Date.now(),
      title: post.title,
      body: post.body,
    };
    setPosts([...posts, newPost]);
    setModalOpen(false);
  }

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      {modalOpen && (
        <MyModal setModalOpen={setModalOpen}>
          <PostForm
            setModalOpen={setModalOpen}
            setInputError={setError}
            createPost={createPost}
          />
          {error && (
            <MyError
              setInputError={setError}
              title={"Нужно заполнить все поля!"}
            />
          )}
        </MyModal>
      )}

      <MyButton onClick={() => setModalOpen(true)}>Создать дело</MyButton>

      <hr style={{ marginBottom: 10 }}></hr>

      <PostFilter filter={filter} setFilter={setFilter} />
      {postError ? (
        <MyError title={`Произошла ошибка ${postError}`}></MyError>
      ) : loader ? (
        <MyLoader />
      ) : sortedAndSearchedPosts.length ? (
        <PostList
          removePost={removePost}
          posts={sortedAndSearchedPosts}
          title={"Список дел"}
        />
      ) : (
        <MyNote
          title="Список дел не найден!"
          body='Для добавления дела нужно нажать кнопку "Создать дело"'
        ></MyNote>
      )}
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
}

export default Posts;
