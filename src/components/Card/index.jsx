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
}) => {
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
        height: 560,
        
      }}
      cover={<img alt={book.title} src={book.imageUrl} style={{ width: '100%', height: '300px' }} />}
    >
      <Meta title={book.title} description={book.description} />
      <Row style={{ display:'flex', alignItems:'center', gap: 5, marginTop: 8 }}>
        <div>
        {detailVisible && (
          <Button type="primary" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridColumnStart: 1, gridColumnEnd: 4  ,background:'#003049', color: '#FFFFFF' }} onClick={handleDetail}>
            Learn More
          </Button>
        )}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridAutoColumns: 'auto', gap: 5,}}>
        {removeVisible && (
          <Button type="primary" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridAutoColumns: 'auto',  background: '#d90429', color: '#FFFFFF' }} onClick={handleRemove} >
            Delete
          </Button>
        )}
        <Button
          style={{ background: '#003E1F', color: '#FFFFFF' }}
          onClick={update} 
        >
          Update
        </Button>
        </div>
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
