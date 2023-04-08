export const filteredContacts = (contacts, filter) => {
  const keyword = filter.toLowerCase();
  const filteredContacts = contacts.filter(
    contact => contact.name.toLowerCase().indexOf(keyword) > -1
  );
  return filteredContacts;
};
