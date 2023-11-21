import "@/styles/globals.css";
import BaseLayout from "@/components/Layout";
import React, { useState } from 'react';


export default function App({ Component, pageProps }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  return (
    <BaseLayout handleSearch={handleSearch}>
      <Component {...pageProps} searchQuery={searchQuery} />
    </BaseLayout>
  );
}