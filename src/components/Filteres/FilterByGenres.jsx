import { useDispatch, useSelector } from "react-redux";
import { filterByGenres } from "../../services/redux/actions/actions";
import { useEffect, useState } from "react";

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
