import "modern-normalize";
import "./App.css";
import { useState } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import initialContacts from "./components/contacts.json";

const App = () => {
  const [contacts, setContacts] = useState(initialContacts);

  const [filter, setFilter] = useState("");
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const resetFilter = () => {
    setFilter("");
  };

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onFilter={setFilter} onReset={resetFilter} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default App;
