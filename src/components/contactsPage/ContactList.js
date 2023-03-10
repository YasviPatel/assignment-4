import { useEffect } from "react";
import { useRouteLoaderData,Link } from "react-router-dom";
import Contact from "./Contact";

function ContactList(props){
  // const contactData=useRouteLoaderData("contact-detail");
  // console.log(contactData);
  console.log(props.contactDataList);
  return(
  <>
      <ul>
        {props.contactDataList.map(contact=>
          
            <li key={contact.id}>
              <Link to={`${contact.id}`}>
              Name:{contact.name}
               Company Name:{contact.company}
               Designation:{contact.designation}
               address:{contact.address}
              </Link>
               
            </li>  
            
        )}
        
      </ul>
      <Contact/>
  </>
  )
}

export default ContactList;


