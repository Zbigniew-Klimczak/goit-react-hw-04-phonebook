import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { contactFilter } from 'components/utils/ContactFormFunc';
const ContactForm = ({ addContact, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  return (
    <>
      <form
        className={css.form}
        onSubmit={evt => {
          evt.preventDefault();
          const form = evt.currentTarget;
          const id = nanoid();
          if (contactFilter(contacts, name)) {
            Notiflix.Notify.warning(`${name} is already in contacts`);
          } else {
            addContact({
              name: name.trim(),
              number: number.trim(),
              id: id,
            });
            form.reset();
          }
        }}
      >
        <label className={css.formLabel}>
          Name:
          <input
            className={css.formInput}
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={evt => setName(evt.currentTarget.value)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.formLabel}>
          Number:
          <input
            className={css.formInput}
            type="tel"
            name="number"
            placeholder="Enter number"
            value={number}
            onChange={evt => setNumber(evt.currentTarget.value)}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  addContact: PropTypes.func.isRequired,
};
export default ContactForm;
