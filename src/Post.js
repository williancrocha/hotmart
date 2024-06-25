import React from "react";
import PropTypes from "prop-types";

const Post = (props) => {
  return (
    <>
      <article>
        <strong>{props.post.title}</strong>
        <button>Remover</button>
        <br />
        <small>{props.post.subtitle}</small>
      </article>
      Media: {props.likes / 2}
      <br />
      <br />
    </>
  );
};

Post.propTypes = {
  
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Post;
