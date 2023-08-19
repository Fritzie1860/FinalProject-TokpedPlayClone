import React, {useEffect, useState} from "react";
import axios from "axios";
import {Form, Button} from "react-bootstrap";
import "./commentlist.css";

const Commentlist = (props) => {
    const {comments, video_id, fresh} = props;
    const [data, setData] = useState("");
    const [comment, setComment] = useState("");
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const fetchData = async (username, comments) => {
        try {
            const url = "https://tokpedplay-fritzie.onrender.com/comments";
            const params = {
                username: username,
                comment: comments,
                video_id: video_id
            };
            const response = await axios.post(url, params);
            console.log('hai, ' + JSON.stringify(response));
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setError("Error fetching data " + error);
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitted username:", username);
        console.log("Submitted comment:", comment);
        setLoading(true);
        await fetchData(username, comment);
        fresh(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
        setLoading(false);
        setUsername("");
        setComment("");
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }


    return (
        <div className="video-comments">
            <h4>Comments</h4>
            <div className="comment-form">
                <Form onSubmit={handleSubmit}
                    className="d-flex">
                    <div className="row m-1">
                        <input type="hidden" name="video_id"
                            value={video_id}/>
                        <input type="text" placeholder="Username..." className="flex-grow-1 mr-2"
                            required
                            value={username}
                            onChange={handleUsername}
                            maxLength={20}
                            name="username"
                            style={
                                {
                                    border: "none",
                                    borderBottom: "1px solid #ccc",
                                    padding: "5px 0",
                                    marginRight: "10px",
                                    outline: "none",
                                    width: "70%"
                                }
                            }/>
                        <input type="text" placeholder="Add a comment..." className="flex-grow-1 mr-2"
                            required
                            maxLength={100}
                            value={comment}
                            onChange={handleCommentChange}
                            name="comment"
                            style={
                                {
                                    border: "none",
                                    borderBottom: "1px solid #ccc",
                                    padding: "5px 0",
                                    marginRight: "10px",
                                    outline: "none",
                                    width: "70%"
                                }
                            }/>
                        <p className="character-count">{comment.length}/{200}</p>
                    </div>
                    <div className="row m-2"></div>
                    <Button type="submit" className="btn btn-primary" >
                        Send
                    </Button>
                </Form>
            </div>
            <br></br>
            <div className="chat-container">
            {
            comments.map((comment, index) => (
                  <div className="chat-message">
                    <div className="username">
                        {
                        comment.username
                    }</div>
                    <div className="message">
                        {
                        comment.comment
                    }</div>
                </div>
            ))
        } </div>
        </div>
        
    );
};

export default Commentlist;
