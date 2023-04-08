export const contactFilter = (contacts, name) => {
  const isContactInContacts =
    contacts.filter(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    ).length > 0;
  return isContactInContacts;
};
