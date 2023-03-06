import { Suspense } from "react";
import { useNavigate,json,defer, useLoaderData,Await } from "react-router-dom";
import ContactList from "./ContactList";

function Contacts(){
 

  const contacts=useLoaderData();
  const navigate=useNavigate();

  function buttonClickHandler(){
      navigate('addContactForm');
  }
  return (
    <>
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={contacts}>
        {(loadedContacts) => <ContactList events={loadedContacts} />}
      </Await>
    </Suspense>
      <button onClick={buttonClickHandler}>Add contact</button>
    </>
  )

  }
export default Contacts;

async function loadContacts(){

  const response=await fetch("https://console.firebase.google.com/project/assignment-4-15b74/database/assignment-4-15b74-default-rtdb/data/~2F/contacts.json")
  if (!response.ok) {
    throw json(
      { message: 'Could not fetch contacts.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.contacts;
  }
}
export function loader() {
  return defer({
    contacts: loadContacts(),
  });
}
