import BookCard from "@/components/Card";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchBook } from "@/pages/api/hello";

const BooksDetail = () => {
  const [bookDetail, setBookDetail] = useState("");
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const getDetail = async () => {
        const bookDet = await fetchBook(id);
        setBookDetail(bookDet);
      };
      getDetail();
    }
  }, [id]);
  return (
    <>
      <BookCard book={bookDetail} />
    </>
  );
};
export default BooksDetail;
