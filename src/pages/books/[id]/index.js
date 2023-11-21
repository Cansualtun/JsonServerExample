import BookCard from "@/components/Card";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchBook } from "@/pages/api/hello";
import { useDispatch } from "react-redux";
import { addFavoriteAsync } from "@/features/favoritesSlice";

const BooksDetail = () => {
  const [bookDetail, setBookDetail] = useState("");
  const router = useRouter();
  const { id } = router.query;
  const dispatch=useDispatch();
  const handleAddFavorite = () => {
    dispatch(addFavoriteAsync(bookDetail));
  };

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
    
      <BookCard book={bookDetail} detailVisible={false}  addToFavorites={handleAddFavorite}/>
    </>
  );
};
export default BooksDetail;
