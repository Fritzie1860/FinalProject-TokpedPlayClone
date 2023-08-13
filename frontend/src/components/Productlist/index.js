import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./product.css"; // Import the product.css file

const Productlist = ({ data }) => {
  return (
    <ListGroup className="mb-4 product-list">
      {data.map((item) => (
        <Card className="product-card" key={item._id}>
          <a href={item.link_product} target="_blank" rel="noopener noreferrer">
            <Card.Body className="d-flex">
              <div className="row-image">
                <div className="image-col">
                  <img
                    className="image"
                    src={item.link_imageProduct}
                    alt="Product"
                  />
                </div>
              </div>
              <div className="row">
                <div className="text-col">
                  <div className="text">
                    <p className="title">{item.title}</p>
                    <p className="desc">Rp{item.price},-</p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </a>
        </Card>
      ))}
    </ListGroup>
  );
};

export default Productlist;
