import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { filteredContacts } from 'components/utils/ContactListFunc';
const ContactList = ({ contacts, filter, deleteContact }) => (
  <ul className={css.contactList}>
    {filteredContacts(contacts, filter).map(contact => (
      <Contact
        key={contact.id}
        id={contact.id}
        name={contact.name}
        number={contact.number}
        contact={contact}
        deleteContact={deleteContact}
      ></Contact>
    ))}
  </ul>
);
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  deleteContact: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
export default ContactList;
