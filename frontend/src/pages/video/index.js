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
  const [link, setLink] = useState([]);
  const [comments, setComments] = useState([]);
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
          "https://tokpedplay-fritzie.onrender.com/products/" + id
        );
        setData(response.data);

        const commentsResponse = await axios.get(
          "https://tokpedplay-fritzie.onrender.com/comments/" + id
        );
        setComments(commentsResponse.data);

        const linkResponse = await axios.get(
          "https://tokpedplay-fritzie.onrender.com/videos/" + id
        );
        setLink(linkResponse.data[0].link_video);

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
          <Col lg={7}>
            <VideoPlayer link_video={link}/>
          </Col>
          <Col lg={3}>
            <CommentList comments={comments} video_id={id} fresh={setFresh}/>
          </Col>
        </Row>
      {/* <Footer /> */}
    </>
  );
};

export default VideoDetail;
