import { useEffect, useState } from "react";
import { deleteBook, fetchBooks, searchBooks } from "./api/hello";
import { Row, Col } from "antd";
import BookCard from "@/components/Card";
import BookCardSkeleton from "@/components/Card/skeleton";
import { useRouter } from "next/router";
import Search from "./search";
import axios from "axios";
import { toast } from "react-toastify";

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
  // Kitabı silmek için çalıştırdığımız fonksiyon
  const handleDelete = async (id) => {
    await deleteBook(id);
    setBooks(books.filter((book) => book.id !== id));
    toast.success("Ürününüz silindi!");
  };

  const handleSearch = async (searchTerm) => {
    setLoading(true);
    try {
      const searchResults = await searchBooks(searchTerm);
      setBooks(searchResults);
    } catch (error) {
      console.error("Arama sırasında hata alındı", error);
    }
    setLoading(false);
  };

  // favorilere eklemek için
  const addToFavorites = async (book) => {
    try {
      await axios.post("http://localhost:3001/favorites", book);
      toast.success("Kitabınız başarıyla favorilere eklendi!");
    } catch (error) {
      console.error("Favorilere eklerken hata alındı", error);
    }
  };
  return (
    <div>
      <div
        style={{
          margin: "16px 8px",
        }}
      >
        <Search handleSearch={handleSearch} />
      </div>
      <Row gutter={[16, 16]}>
        {loading
          ? renderSkeletons()
          : books.map((book) => (
              <Col key={book.id}>
                <BookCard
                  book={book}
                  detail={() => router.push(`books/${book.id}`)}
                  update={() => router.push(`/books/update-book/${book.id}`)}
                  remove={() => handleDelete(book.id)}
                  addToFavorites={addToFavorites}
                />
              </Col>
            ))}
      </Row>
    </div>
  );
}
