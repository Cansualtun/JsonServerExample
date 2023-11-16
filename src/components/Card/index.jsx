import React from "react";
import { Card, Button, Row } from "antd";

const { Meta } = Card;
const BookCard = ({ book, detail, remove,update }) => {
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
        <Button type="primary" onClick={detail}>
          Learn More
        </Button>
        <Button type="primary" danger onClick={remove}>
          Delete
        </Button>
        <Button style={{backgroundColor:"orange", color:"white"}}  onClick={update}>
          Update
        </Button>
      </Row>
    </Card>
  );
};

export default BookCard;
