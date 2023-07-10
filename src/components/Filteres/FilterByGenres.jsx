import { useDispatch, useSelector } from "react-redux";
import { filterByGenres } from "../../services/redux/actions/actions";
import { useEffect, useState } from "react";
import { Select } from "@chakra-ui/react";

const FilterByGenres = () => {
  const backup = useSelector((state) => state.suppliers);
  const [filterGenre, setFilterGenre] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterByGenres(filterGenre));
  }, [dispatch, filterGenre]);

  const handlerByGenres = (event) => {
    const { value } = event.target;
    dispatch(filterByGenres(value));
    setFilterGenre(value);
  };

  return (
    <Select
      onChange={handlerByGenres}
      value={filterGenre}
      variant="filled"
      width="200px"
      borderRadius="md"
      boxShadow="md"
      _focus={{ boxShadow: "outline" }}
    >
      <option value="All">All Genres</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </Select>
  );
};

export default FilterByGenres;
