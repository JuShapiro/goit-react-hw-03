import "modern-normalize";
import "./App.css";
import { useState } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import initialContacts from "./components/contacts.json";

const App = () => {
  const [contacts, setContacts] = useState(initialContacts);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
