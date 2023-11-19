import React from "react";
import { Card, Button, Row } from "antd";
import PropTypes from "prop-types";

const { Meta } = Card;

const BookCard = ({ book, removeVisible, detailVisible, detail, remove }) => {
  const handleDetail = () => {
    if (detailVisible) {
      detail();
    }
  };

  const handleRemove = () => {
    if (removeVisible) {
      remove();
    }
  };

  return (
    <Card
      hoverable
      style={{
        width: 280,
        height:700
      }}
      cover={<img alt={book.title} src={book.imageUrl} />}
    >
      <Meta title={book.title} description={book.description} />
      <Row style={{ gap: 10, marginTop: 10 }}>
        {detailVisible && (
          <Button type="primary" onClick={handleDetail}>
            Daha Fazla Bilgi
          </Button>
        )}
        {removeVisible && (
          <Button type="primary" danger onClick={handleRemove}>
            Sil
          </Button>
        )}
        <Button style={{backgroundColor:"orange", color:"white"}}  onClick={update}>
          Update
        </Button>
      </Row>
    </Card>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  
  removeVisible: PropTypes.bool.isRequired,
  detailVisible: PropTypes.bool.isRequired,

};

BookCard.defaultProps = {
  detailVisible: true,
  removeVisible: true,
};

export default BookCard;
