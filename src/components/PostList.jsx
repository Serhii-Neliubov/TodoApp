import React from "react";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({ posts, title, removePost }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup className="todo-list">
        {posts.map((post, index) => {
          return (
            <CSSTransition key={post.id} timeout={500} classNames="item">
              <PostItem
                size="sm"
                className="remove-btn"
                removePost={removePost}
                number={index + 1}
                post={post}
                key={post.id}
                index={index}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
