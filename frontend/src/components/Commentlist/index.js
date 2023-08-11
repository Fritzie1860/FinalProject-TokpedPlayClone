import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Commentlist = ({ comments }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle comment submission logic here
    console.log("Submitted comment:", comment);
    setComment("");
  };

  return (
    <div className="video-comments">
      <h4>Comments</h4>
      <div className="comment-form">
        <Form onSubmit={handleSubmit} className="d-flex">
          <input
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={handleCommentChange}
            className="flex-grow-1 mr-2"
            style={{
              border: "none",
              borderBottom: "1px solid #ccc",
              padding: "5px 0",
              marginRight: "10px",
              outline: "none",
              width: "70%",
            }}
          />
          <Button type="submit" className="btn btn-primary">
            Send
          </Button>
        </Form>
      </div>
      {/* Render the comments */}
      {comments.map((comment, index) => (
        <div className="comment" key={index}>
          <div className="username">{comment.username}</div>
          <div className="text">{comment.comment}</div>
        </div>
      ))}
    </div>
  );
};

export default Commentlist;
