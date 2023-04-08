import { useState, useEffect } from 'react';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';
import {
  getLocalContacts,
  addLocalContact,
  deleteLocalContact,
} from './utils/AppFunc';
export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    setContacts(getLocalContacts());
  }, []);
  return (
    <section className={css.phonebook}>
      <h1 className={css.phonebookTitle}>Phonebook</h1>
      <ContactForm
        contacts={contacts}
        addContact={contactToAdd => {
          setContacts(oldContacts => [...oldContacts, contactToAdd]);
          addLocalContact(contactToAdd);
        }}
      ></ContactForm>
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter
        filterValue={filter}
        onChange={evt => setFilter(evt.currentTarget.value.trim())}
      ></Filter>
      <ContactList
        deleteContact={contactToDelete => {
          let newContacts = contacts.filter(
            contact => contact !== contactToDelete
          );
          setContacts(newContacts);
          deleteLocalContact(contactToDelete);
        }}
        contacts={contacts}
        filter={filter}
      ></ContactList>
    </section>
  );
};
