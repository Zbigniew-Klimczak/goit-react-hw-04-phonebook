import PropTypes from 'prop-types';
import css from './Contact.module.css';
const Contact = ({ id, name, number, contact, deleteContact }) => (
  <>
    <li className={css.listItem} key={id}>
      {name}: {number}
      <button
        className={css.listItemButton}
        type="button"
        onClick={() => {
          deleteContact(contact);
        }}
      >
        Delete
      </button>
    </li>
  </>
);
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
export default Contact;
