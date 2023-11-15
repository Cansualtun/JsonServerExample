import React from "react";
import { Card } from "antd";

const { Meta } = Card;
const BookCard = ({ book }) => {
  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt={book.title} src={book.imageUrl} />}
    >
      <Meta title={book.title} description={book.description} />
    </Card>
  );
};

export default BookCard;
