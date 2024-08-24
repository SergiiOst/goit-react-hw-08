import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filter/slice";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <p>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        placeholder="Enter contact name..."
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
