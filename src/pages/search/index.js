
import { useState } from "react";
import { Input, Button } from "antd";

const Search = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(searchTerm);
  };

  return (
    <div>
      <Input
        placeholder="Search for a book..."
        value={searchTerm}
        onChange={handleInputChange}
        style={{ width: "200px", marginRight: "16px" }}
      />
      <Button type="primary" onClick={handleSearchClick}>
        Search
      </Button>
    </div>
  );
};

export default Search;
