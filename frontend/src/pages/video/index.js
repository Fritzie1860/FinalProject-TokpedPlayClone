// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
// import Productlist from "../../components/Productlist";

// const Video = () => {

//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const urlSearchParams = new URLSearchParams(window.location.search);
//     const id = urlSearchParams.get("id");
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3001/api/product/products/" + id
//         );
//         // console.log(JSON.stringify(response.data));
//         setData(response.data);
//         // await sleep(2000);
//         setLoading(false);
//       } catch (error) {
//         setError("Error fetching data " + error);
//         setLoading(false);
//       }
//     };
//     fetchData();

//   }, []);

//   return (
//     <div>
//       <Header />
//       <main>
//         <Productlist list={data}></Productlist>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Video;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/Productlist";
import VideoPlayer from "../../components/Videoplayer";
import CommentList from "../../components/Commentlist";


const VideoDetail = () => {
  
  const [data, setData] = useState([]);
  const [comments, setComments] = useState([]); // State for comments
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [id, setId] = useState(null);
  const [fresh, setFresh] = useState(null);


  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const id = urlSearchParams.get("id");
    setId(id);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/product/products/" + id
        );
        setData(response.data);

        // Fetch comments data here and set it to the state
        const commentsResponse = await axios.get(
          "http://localhost:3001/api/comment/comments/" + id
        );
        setComments(commentsResponse.data);

        setLoading(false);
      } catch (error) {
        setError("Error fetching data " + error);
        setLoading(false);
      }
    };

    fetchData();
  }, [fresh]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Header />
        <Row style={{ margin: "10% 15px auto 15px" }}>
          <Col lg={2}>
            <ProductList data={data} />
          </Col>
          <Col lg={8}>
            <VideoPlayer />
          </Col>
          <Col lg={2}>
            {/* Pass the comments data to CommentList */}
            <CommentList comments={comments} ids={id} fresh={setFresh}/>
          </Col>
        </Row>
      <Footer />
    </>
  );
};

export default VideoDetail;
