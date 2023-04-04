import PropTypes from 'prop-types';
import css from './Filter.module.css';
const Filter = ({ onChange, filterValue }) => (
  <label className={css.label}>
    Find contacts by name:
    <input
      className={css.input}
      type="text"
      name="filter"
      placeholder="Enter name"
      value={filterValue}
      onChange={onChange}
    />
  </label>
);
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string,
};
export default Filter;
