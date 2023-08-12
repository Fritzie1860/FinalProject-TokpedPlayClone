import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Commentlist = ({ comments }) => {
  const [comment, setComment] = useState("");
  const [username, setUsername] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle comment submission logic here
    console.log("Submitted username:", username);
    console.log("Submitted comment:", comment);
    // setComment("");
  };

  return (
    <div className="video-comments">
      <h4>Comments</h4>
      <div className="comment-form">
        <Form onSubmit={handleSubmit} className="d-flex">
          <div className="row m-2">
            <input type="hidden" name="video_id"/>
            <input
              type="text"
              placeholder="Username..."
              className="flex-grow-1 mr-2"
              value={username}
              onChange={handleUsername}
              name="username"
              style={{
                border: "none",
                borderBottom: "1px solid #ccc",
                padding: "5px 0",
                marginRight: "10px",
                outline: "none",
                width: "70%",
              }}
            />
            <input
              type="text"
              placeholder="Add a comment..."
              className="flex-grow-1 mr-2"
              value={comment}
              onChange={handleCommentChange}
              name="comment"
              style={{
                border: "none",
                borderBottom: "1px solid #ccc",
                padding: "5px 0",
                marginRight: "10px",
                outline: "none",
                width: "70%",
              }}
            />
          </div>
          <Button type="submit" className="btn btn-primary">
            Send
          </Button>
        </Form>
      </div>
      <br></br>
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
