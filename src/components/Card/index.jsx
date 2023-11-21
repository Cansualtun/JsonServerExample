import React from "react";
import { Card, Button, Row } from "antd";
import PropTypes from "prop-types";

const { Meta } = Card;

const BookCard = ({
  book,
  removeVisible,
  detailVisible,
  detail,
  remove,
  update,
  favoriteVisible,
  addToFavorites,
  removeFavoriVisible,
  removeToFavorites,
}) => {
  const handleDetail = () => {
    if (detailVisible) {
      detail();
    }
  };

  return (
    <Card
      hoverable
      style={{
        width: 280,
        height: 560,
      }}
      cover={
        <img
          alt={book.title}
          src={book.imageUrl}
          style={{ width: "100%", height: "300px" }}
        />
      }
    >
      <Meta title={book.title} description={book.description} />
      <Row
        style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 8 }}
      >
        <div>
          {detailVisible && (
            <Button
              type="primary"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gridColumnStart: 1,
                gridColumnEnd: 4,
                background: "#003049",
                color: "#FFFFFF",
              }}
              onClick={handleDetail}
            >
              Learn More
            </Button>
          )}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridAutoColumns: "auto",
            gap: 5,
          }}
        >
          {removeVisible && (
            <Button
              type="primary"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridAutoColumns: "auto",
                background: "#d90429",
                color: "#FFFFFF",
              }}
              onClick={remove}
            >
              Delete
            </Button>
          )}
          <Button
            style={{ background: "#003E1F", color: "#FFFFFF" }}
            onClick={update}
          >
            Update
          </Button>
          {favoriteVisible && (
            <Button
              style={{ background: "#00008B", color: "#FFFFFF" }}
              onClick={() => addToFavorites(book)}
            >
              Add Favorite
            </Button>
          )}
          {removeFavoriVisible && (
            <Button
              style={{ background: "#00008B", color: "#FFFFFF" }}
              onClick={() => removeToFavorites(book.id)}
            >
              Remove Favorite
            </Button>
          )}
        </div>
      </Row>
    </Card>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  imageUrl: PropTypes.string,
  removeVisible: PropTypes.bool.isRequired,
  detailVisible: PropTypes.bool.isRequired,
  favoriteVisible: PropTypes.bool,
  addToFavorites: PropTypes.func,
  removeFavoriVisible: PropTypes.bool,
  removeToFavorites: PropTypes.func,
};

BookCard.defaultProps = {
  detailVisible: true,
  removeVisible: true,
  favoriteVisible: true,
  removeFavoriVisible: false,
};

export default BookCard;
