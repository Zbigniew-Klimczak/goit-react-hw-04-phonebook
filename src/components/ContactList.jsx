import Contact from './Contact';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
const ContactList = ({ filteredContacts, deleteContact }) => (
  <ul className={css.contactList}>
    {filteredContacts().map(contact => (
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
  filteredContacts: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
export default ContactList;
