import axios from "axios";

const baseURL = "http://localhost:3001/books";

const axiosInstance = axios.create({
  baseURL,
});

// tüm kitapları çekebilmek için kullandığımız api
export const fetchBooks = async () => {
  const response = await axiosInstance.get();
  return response.data;
};
