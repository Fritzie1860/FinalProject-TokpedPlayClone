import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col } from "react-bootstrap";
import "./thumbnail.css";

const Thumbnail = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://tokpedplay-fritzie.onrender.com/videos"
        );
        setData(response.data);
        await sleep(2000);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data " + error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Row className="thumbnail-row">
        {data.map((video) => (
          <Col lg={2} md={4} sm={6} key={video._id} className="mb-4">
            <Card className="thumbnail-card">
              <Card.Img
                variant="top"
                src={video.link_thumbnail}
                className="card-img"
              />
              <Card.Body>
                <Card.Title>{video.title}</Card.Title>
                <Card.Text>{video.upload_date}</Card.Text>
                <a
                  href={"https://tokpedplay-fritzie.000webhostapp.com/video?id=" + video._id}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Video
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Thumbnail;
