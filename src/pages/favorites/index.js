import { Col, Row } from "antd";
import BookCard from "@/components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { removeFavorite, setFavorites } from "@/features/favoritesSlice";
import { useSelector } from "react-redux";

const FavoritesPage = () => {
  // sayfanın içerisinde statei kullanabilmek için dispatch çağırdım
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const FavoriteList = async () => {
    try {
      const response = await axios.get("http://localhost:3001/favorites");
      //setFavorites(response.data);
      dispatch(setFavorites(response.data));
    } catch (error) {
      console.error("Favoriler yüklenirken hata oluştu");
    }
  };

  // favorilerden kitap silme fonksiyonu
  const removeToFavorites = async (bookId) => {
    try {
      await axios.delete(`http://localhost:3001/favorites/${bookId}`);
      //setFavorites(favorites.filter((book) => book.id !== bookId));
      dispatch(removeFavorite(bookId));
      toast.success("Kitabınız favorilerden kaldırıldı");
    } catch (error) {
      console.error("Favorilerden kaldırırken hata oluştu", error);
    }
  };

  useEffect(() => {
    FavoriteList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row gutter={[16, 16]}>
      {favorites.map((favorite) => (
        <Col key={favorite.id}>
          <BookCard
            book={favorite}
            removeVisible={false}
            favoriteVisible={false}
            removeToFavorites={removeToFavorites}
          />
        </Col>
      ))}
    </Row>
  );
};

export default FavoritesPage;
