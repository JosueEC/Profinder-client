import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProfessionals } from "../../services/redux/actions/actions";
import { Input, Button, Flex } from "@chakra-ui/react";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
   const response = dispatch(searchProfessionals(searchTerm));
   console.log(response);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Flex alignItems="center" justifyContent="center" mb={4}>
      <Input
        type="text"
        placeholder="Search professionals"
        value={searchTerm}
        onChange={handleInputChange}
        mr={2}
      />
      <Button colorScheme="teal" onClick={handleSearch}>
        Search
      </Button>
    </Flex>
  );
};

export default SearchBar;
