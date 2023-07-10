import { useDispatch, useSelector } from "react-redux";
import { orderByRating } from "../../services/redux/actions/actions";
import { useState } from "react";
import { Select, FormControl, FormLabel } from "@chakra-ui/react";

const FilterByRating = () => {
  const allProfesionales = useSelector((state) => state.profesionales);
  const dispatch = useDispatch();
  const [orderRating, setOrderByRating] = useState("");

  const handlerByRating = (event) => {
    const { value } = event.target;
    dispatch(orderByRating(value));
    setOrderByRating(`Order ${value}`);
  };

  return (
    <FormControl>
      <Select
        onChange={handlerByRating}
        value={orderRating}
        variant="filled"
        width="200px"
        borderRadius="md"
        boxShadow="md"
        _focus={{ boxShadow: "outline" }}
      >
        <option value="lower">Lower</option>
        <option value="higher">Higher</option>
      </Select>
    </FormControl>
  );
};

export default FilterByRating;
