import { useEffect, useState } from "react";
import { fetchBooks } from "./api/hello";
import { Row, Col } from "antd";
import BookCard from "@/components/Card";
import BookCardSkeleton from "@/components/Card/skeleton";
import { useRouter } from "next/router";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const getBooks = async () => {
    setLoading(true);
    try {
      const allBooks = await fetchBooks();
      setBooks(allBooks);
    } catch (error) {
      console.error("Api isteği sırasında hata alındı", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getBooks();
  }, []);

  // Apiden dönen data kadar skeleton dönmesi için
  const renderSkeletons = () => {
    return Array.from({ length: 20 }, (_, index) => (
      <Col key={index}>
        <BookCardSkeleton />
      </Col>
    ));
  };
  return (
    <Row gutter={[16, 16]}>
      {loading
        ? renderSkeletons()
        : books.map((book) => (
            <Col key={book.id}>
              <BookCard
                book={book}
                detail={() => router.push(`books/${book.id}`)}
              />
            </Col>
          ))}
    </Row>
  );
}
