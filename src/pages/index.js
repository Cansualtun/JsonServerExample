import { useEffect, useState } from "react";
import { fetchBooks } from "./api/hello";
import { Row } from "antd";

export default function Home() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const allBooks = await fetchBooks();
    setBooks(allBooks);
  };

  useEffect(() => {
    getBooks();
  }, []);
  return <Row gutter={[16, 16]}></Row>;
}
