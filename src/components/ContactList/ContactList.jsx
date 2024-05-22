import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map((contact) => (
        <li className={css.contactCard} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
