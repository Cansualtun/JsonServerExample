import React from "react";
import { Card, Button } from "antd";
import { bookPropTypes, bookDefaultProps } from "./propType";

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
  return (
    <Card
      hoverable
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: 400,
        height: "100vh",
      }}
    >
      <img
        alt={book.title}
        src={book.imageUrl}
        style={{ width: "100%", flex: "1" }}
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
              background: "#00008B",
              color: "#FFFFFF",
              marginBottom: "8px",
            }}
            onClick={() => addToFavorites(book)}
            size="large"
          >
            Add Favorite
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
