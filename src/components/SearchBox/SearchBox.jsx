import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.searchField}>
      <label htmlFor="searchField" className={css.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="searchField"
        value={value}
        onChange={(event) => onFilter(event.target.value)}
        className={css.input}
      />
    </div>
  );
};

export default SearchBox;
