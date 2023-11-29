import "@/styles/globals.css";
import BaseLayout from "@/components/Layout";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "@/store";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  return (
    <Provider store={store}>
      {/* Global title */}
      <Head>
        <title>Book App</title>
      </Head>
      <BaseLayout handleSearch={handleSearch}>
        <ToastContainer />
        <Component {...pageProps} searchQuery={searchQuery} />
      </BaseLayout>
    </Provider>
  );
}
