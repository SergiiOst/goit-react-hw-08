import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selector";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.list}>
      {contacts.length ? (
        contacts.map((contact) => (
          <li key={contact.id} className={s.item}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        ))
      ) : (
        <h2>Contact list is empty!</h2>
      )}
    </ul>
  );
};

export default ContactList;
