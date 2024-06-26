import React from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";

const Post = (props) => {
  return (
    <>
      <article>
        <PostHeader/>
        <br />
        <small>{props.post.subtitle}</small>
        <br />
        Media: {props.post.likes / 2}
      </article>
      <br />
      
    </>
  );
};

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,

  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }),
};

export default Post;
