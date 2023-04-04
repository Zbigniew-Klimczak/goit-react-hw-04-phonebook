import { Component } from 'react';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';
export class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      filter: '',
    };
  }
  componentDidMount() {
    this.setState({ contacts: this.getLocalContacts() });
  }
  getLocalContacts = () => {
    const localContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    return localContacts;
  };

  filterValueChange = evt => {
    this.setState({ filter: evt.currentTarget.value.trim() });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    const keyword = filter.toLowerCase();
    const filteredContacts = contacts.filter(
      contact => contact.name.toLowerCase().indexOf(keyword) > -1
    );
    return filteredContacts;
  };
  addContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
    this.addLocalContact(contact);
  };
  addLocalContact = contact => {
    const localContacts = this.getLocalContacts();
    localContacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(localContacts));
  };
  deleteContact = contactToDelete => {
    const { contacts } = this.state;
    let newContacts = contacts.filter(contact => contact !== contactToDelete);
    this.setState({ contacts: newContacts });
    this.deleteLocalContact(contactToDelete);
  };
  deleteLocalContact = contact => {
    const localContacts = this.getLocalContacts();
    const index = localContacts.findIndex(localContact => {
      return localContact.id === contact.id;
    });
    localContacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(localContacts));
  };
  render() {
    const { filter, contacts } = this.state;
    return (
      <section className={css.phonebook}>
        <h1 className={css.phonebookTitle}>Phonebook</h1>
        <ContactForm
          contacts={contacts}
          addContact={this.addContact}
        ></ContactForm>
        <h2 className={css.contactsTitle}>Contacts</h2>
        <Filter filterValue={filter} onChange={this.filterValueChange}></Filter>
        <ContactList
          deleteContact={this.deleteContact}
          filteredContacts={this.filteredContacts}
        ></ContactList>
      </section>
    );
  }
}
