import { useEffect } from "react";
import { useRouteLoaderData, Link } from "react-router-dom";
import Contact from "./Contact";
import classes from "./ContactList.module.css";

function ContactList(props) {
  // const contactData=useRouteLoaderData("contact-detail");
  // console.log(contactData);
  console.log(props.contactDataList);
  return (
    <>
      <ul>
        {props.contactDataList.map((contact) => (
          <li key={contact.id}>
            <Link to={`${contact.id}`}>
              <Contact contact={contact} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactList;
