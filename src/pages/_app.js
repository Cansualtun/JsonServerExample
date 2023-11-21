import "@/styles/globals.css";
import BaseLayout from "@/components/Layout";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function App({ Component, pageProps }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  return (
    <Provider store={store}>
      <BaseLayout handleSearch={handleSearch}>
        <ToastContainer />
        <Component {...pageProps} searchQuery={searchQuery} />
      </BaseLayout>
    </Provider>
  );
}
