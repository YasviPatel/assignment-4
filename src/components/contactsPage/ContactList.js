// import Contact from "./Contact";

function ContactList({contacts}){
  return(
  <>
    <div>
      <ul>
        {contacts.map((contact)=>(
          <li key={contact.id}>
            <p>{contact.name}</p>
          </li>
        ))}
      </ul>
    </div>
  </>
  )
}

export default ContactList;