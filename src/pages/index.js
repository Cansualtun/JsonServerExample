import { useEffect, useState } from "react";
import { deleteBook, fetchBooks } from "./api/hello";
import { Row, Col } from "antd";
import BookCard from "@/components/Card";
import BookCardSkeleton from "@/components/Card/skeleton";
import { useRouter } from "next/router";

export default function Home({ searchResults }) {
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
  // Kitabı silmek için çalıştırdığımız fonksiyon
  const handleDelete = async (id) => {
    await deleteBook(id);
    setBooks(books.filter((book) => book.id !== id));
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
                remove={() => {
                  handleDelete(book.id);
                }}
                update={()=>router.push(`/books/update-book/${book.id}`)}
              />
            </Col>
          ))}
    </Row>
  );
}