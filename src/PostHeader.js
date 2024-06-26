import React from "react";
import PropTypes from "prop-types";

const PostHeader = (props) => {
  return (
    <>
      <strong>
        {props.post.read && <s>{props.post.title}</s>}
        {!props.post.read && props.post.title}
      </strong>
      <button onClick={() => props.onRemove(props.post.id)}>Remover</button>
    </>
  );
};

PostHeader.propTypes = {
    onRemove: PropTypes.func.isRequired,
  
    post: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      read: PropTypes.bool.isRequired,
    }),
    };

export default PostHeader;
