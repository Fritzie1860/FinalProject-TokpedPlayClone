// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import Plyr from "plyr"; // Import Plyr component
// import "plyr/dist/plyr.css"; // Import Plyr styles
// import {
//   Card,
//   Container,
//   Row,
//   Col,
//   ListGroup,
//   Form,
//   Button,
// } from "react-bootstrap";
// import "./player.css";

// const List_product = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [comment, setComment] = useState("");
//   const videoRef = useRef(null);

//   useEffect(() => {
//     // Initialize Plyr when the component mounts
//     const player = new Plyr(videoRef.current);
//     return () => {
//       // Destroy Plyr instance when the component unmounts
//       player.destroy();
//     };
//   }, []);

//   function sleep(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
//   }

//   const handleCommentChange = (e) => {
//     setComment(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can implement the logic to submit the comment
//     console.log("Submitted comment:", comment);
//     setComment("");
//   };

//   useEffect(() => {
//     const urlSearchParams = new URLSearchParams(window.location.search);
//     const id = urlSearchParams.get("id");
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3001/api/product/products/" + id
//         );
//         setData(response.data);
//         await sleep(2000);
//         setLoading(false);
//       } catch (error) {
//         setError("Error fetching data " + error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <Container className="mt-4">
//       <Row style={{ margin: "15% 15px auto 15px" }}>
//         <Col lg={2}>
//           {/* Related Products */}
//           <ListGroup
//             className="mb-4"
//             style={{ maxHeight: "60vh", overflowY: "auto" }}
//           >
//             {data.map((item) => (

//             ))}
//           </ListGroup>
//         </Col>
//         <Col lg={10}>
//           {/* YouTube Video Embed */}
//           <div
//             className="player"
//             data-plyr-provider="youtube"
//             data-plyr-embed-id="yoBibrIPWJQ"
//           >
//             <div className="embed-responsive embed-responsive-16by9 rounded">
//               <iframe
//                 ref={videoRef}
//                 className="embed-responsive-item"
//                 src="https://www.youtube.com/embed/yoBibrIPWJQ"
//                 title="YouTube Video"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//           {/* Video Details */}
//           <div className="mt-4">
//             <h2>Video Title</h2>
//             <p>Views • Date</p>
//             <hr />
//             <p>Description of the video goes here...</p>
//           </div>
//           {/* Comments */}
//           <div className="video-comments">
//             <h4>Comments</h4>
//             <div className="comment-form">
//               <Form onSubmit={handleSubmit} className="d-flex">
//                 <input
//                   type="text"
//                   placeholder="Add a comment..."
//                   value={comment}
//                   onChange={handleCommentChange}
//                   className="flex-grow-1 mr-2"
//                   style={{
//                     border: "none",
//                     borderBottom: "1px solid #ccc",
//                     padding: "5px 0",
//                     marginRight: "10px",
//                     outline: "none",
//                     width: "70%",
//                   }}
//                 />
//                 <Button type="submit" className="btn btn-primary">
//                   Send
//                 </Button>
//               </Form>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default List_product;

import React from "react";
import { Card, ListGroup, Col } from "react-bootstrap";
import "./product.css"; // Import the product.css file

const Productlist = ({ data }) => {
  return (
    <ListGroup
      className="mb-4 product-list"
      style={{ maxHeight: "60vh", overflowY: "auto" }}
    >
      {data.map((item) => (
        <Card className="product-card" key={item._id}>
          <Card.Body>
            <Col xs={3} className="image-col">
              <img className="image" src={item.link_imageProduct} alt="Product" />
            </Col>
            <Col xs={9} className="text-col">
              <div className="text">
                <p className="title">{item.title}</p>
                <p className="desc">{item.price}</p>
                <a
                  href={item.link_product}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Video
                </a>
              </div>
            </Col>
          </Card.Body>
        </Card>
      ))}
    </ListGroup>
  );
};

export default Productlist;
