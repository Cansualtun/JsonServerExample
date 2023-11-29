import React from "react";
import { Card, Button } from "antd";
import { bookPropTypes, bookDefaultProps } from "./propType";
import { useState } from "react";

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
  removeToFavorites,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToFavorites = () => {
    addToFavorites(book);
    setIsFavorite(true);
  };

  const handleRemoveFromFavorites = () => {
    removeToFavorites(book.id);
    setIsFavorite(false);
  };

  return (
    <Card
      hoverable
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: 350,
        maxHeight: "100vh",
        overflow: "auto", 
      }}
    >
      <img
        alt={book.title}
        src={book.imageUrl}
        style={{ width: "100%", height: "auto", maxHeight: "300px", flexShrink: 0 }}  
      />
      <div>
        <Meta title={book.title} description={book.description} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {detailVisible && (
          <Button
            type="primary"
            style={{
              background: "#003049",
              color: "#FFFFFF",
              marginBottom: "8px",
            }}
            onClick={detail}
            size="large"
          >
            Learn More
          </Button>
        )}
        {removeVisible && (
          <Button
            type="primary"
            style={{
              background: "#d90429",
              color: "#FFFFFF",
              marginBottom: "8px",
            }}
            onClick={remove}
            size="large"
          >
            Delete
          </Button>
        )}
        <Button
          style={{
            background: "#003E1F",
            color: "#FFFFFF",
            marginBottom: "8px",
          }}
          onClick={update}
          size="large"
        >
          Update
        </Button>
        {favoriteVisible ? (
          <Button
            style={{
              background: isFavorite ? "#808080" : "#00008B",
              color: "#FFFFFF",
              marginBottom: "8px",
            }}
            onClick={
              isFavorite ? handleRemoveFromFavorites : handleAddToFavorites
            }
            size="large"
            disabled={isFavorite}
          >
            {isFavorite ? "Remove Favorite" : "Add Favorite"}
          </Button>
        ) : (
          <Button
            style={{
              background: "#00008B",
              color: "#FFFFFF",
              marginBottom: "8px",
            }}
            onClick={() => removeToFavorites(book.id)}
            size="large"
          >
            Remove Favorite
          </Button>
        )}
      </div>
    </Card>
  );
};

BookCard.propTypes = bookPropTypes;
BookCard.defaultProps = bookDefaultProps;

export default BookCard;
