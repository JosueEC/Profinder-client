import { useDispatch } from "react-redux";
import { filterByGenres } from "../../services/redux/actions/actions";
import { useEffect, useState } from "react";

const FilterByGenres = () => {
  const [filterGenre, setFilterGenre] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const response = dispatch(filterByGenres());
    console.log(response);
  }, [dispatch]);
  const handlerByGenres = (event) => {
    const { value } = event.target;
    dispatch(filterByGenres(value));
    setFilterGenre(`Order ${value}`);
  };

  return (
    <div>
      <select onChange={handlerByGenres}>
        <option value="All"> All Genres</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
};

export default FilterByGenres;
