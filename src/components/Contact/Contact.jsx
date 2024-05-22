import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ contact: { id, name, number } }) => {
  return (
    <li className={css.contactCard}>
      <div>
        <p className={css.contactText}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.contactText}>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.btnCard}>Delete</button>
    </li>
  );
};

export default Contact;
