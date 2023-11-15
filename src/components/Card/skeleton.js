import React from "react";
import { Card, Skeleton } from "antd";

const BookCardSkeleton = () => {
  return (
    <Card style={{ width: 400, gap: 10 }}>
      <Skeleton.Image style={{ width: 400, height: 250 }} />
      <Skeleton paragraph={{ rows: 3 }} active />
    </Card>
  );
};

export default BookCardSkeleton;
