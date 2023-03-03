import { useNavigate } from "react-router-dom";
import ContactList from "./ContactList";

function Contacts(){

  const navigate=useNavigate();

  function buttonClickHandler(){
      navigate('addContactForm');
  }
  return (
    <>
      Hii from Contacts page
      <button onClick={buttonClickHandler}>Add contact</button>
      <ContactList/>
    </>
  )
}

export default Contacts;