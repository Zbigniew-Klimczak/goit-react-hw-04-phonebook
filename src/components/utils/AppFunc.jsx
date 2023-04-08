export const getLocalContacts = () => {
  const localContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
  return localContacts;
};
export const addLocalContact = contact => {
  const localContacts = getLocalContacts();
  localContacts.push(contact);
  localStorage.setItem('contacts', JSON.stringify(localContacts));
};

export const deleteLocalContact = contact => {
  const localContacts = getLocalContacts();
  const index = localContacts.findIndex(localContact => {
    return localContact.id === contact.id;
  });
  localContacts.splice(index, 1);
  localStorage.setItem('contacts', JSON.stringify(localContacts));
};
