import { useState, useEffect } from 'react';
import { ContactsForm } from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { Box } from './Box';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  const handleRemove = id => {
    setContacts({
      contacts: contacts.filter(contact => contact.id !== id),
    });
  };

  const formSubmitHandler = data => {
    //console.log('data', data);
    contacts.find(contact => contact.name === data.name)
      ? alert(`${data.name} is already in contacts`)
      : setContacts([...contacts, data]);
  };

  const changeFilter = e => {
    setFilter({ filter: e.currentTarget.value });
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();
  return (
    <Box p={4}>
      <h1>Phonebook</h1>
      <ContactsForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactsList contacts={visibleContacts} onRemove={handleRemove} />
    </Box>
  );
};
