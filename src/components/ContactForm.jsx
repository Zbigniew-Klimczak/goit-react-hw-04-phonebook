import { Component } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleChange = evt => {
    const { name } = evt.currentTarget;
    this.setState({ [name]: evt.currentTarget.value });
  };
  handleSubmit = evt => {
    const { name, number } = this.state;
    const { addContact, contacts } = this.props;
    evt.preventDefault();
    const form = evt.currentTarget;
    const id = nanoid();
    if (
      contacts.filter(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      ).length > 0
    ) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
    } else {
      addContact({
        name: name.trim(),
        number: number.trim(),
        id: id,
      });
      form.reset();
    }
  };
  render() {
    const { name, number } = this.state;
    return (
      <>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label className={css.formLabel}>
            Name:
            <input
              className={css.formInput}
              type="text"
              name="name"
              placeholder="Enter name"
              value={name}
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
  }
}
ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  addContact: PropTypes.func.isRequired,
};
export default ContactForm;
