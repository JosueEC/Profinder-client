import { useDispatch, useSelector } from "react-redux";
import { orderByRating } from "../../services/redux/actions/actions";
import { useState } from "react";

const FilterByRating = () => {
  const allProfesionales = useSelector(state => state.profesionales);
 // console.log(allProfesionales);
  const dispatch = useDispatch();
  const [orderRating, setOrderByRating] = useState("");

  const handlerByRating = (event) => {
    const { value } = event.target;
    dispatch(orderByRating(value));
    setOrderByRating(`Order ${value}`);
  };

  return (
    <div>
      <select onChange={handlerByRating}>
     
        <label value="">RATING</label>
        <option value="lower">Lower</option>
        <option value="higher">Higher</option>
      </select>
    </div>
  );
};

export default FilterByRating;
