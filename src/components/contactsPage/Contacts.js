
import { useNavigate,json,defer, useLoaderData,Link,useRouteLoaderData, Outlet} from "react-router-dom";
import ContactList from "./ContactList"
const Contacts=()=>{
 
  const contactData=useRouteLoaderData("contact-detail");
  const navigate=useNavigate();
  console.log(contactData);

  function buttonClickHandler(){
      navigate('addContactForm');
  }
  return (
    
    <>
  
      <ul>
        {contactData.map((contact)=>(
          
            <li key={contact.id}>
              <Link to={`${contact.id}`}>
              Name:{contact.name}
               Company Name:{contact.company}
               Designation:{contact.designation}
               address:{contact.address}
              </Link>
               
            </li>  
            
        ))}
        
      </ul>
      <button onClick={buttonClickHandler}>Add contact</button>
      <ContactList/>
      <Outlet/>
    </>
  )

  }
export default Contacts;
// async function loadContact(id) {
//   const response = await fetch('' + id);

//   if (!response.ok) {
//     throw json(
//       { message: 'Could not fetch details for selected event.' },
//       {
//         status: 500,
//       }
//     );
//   } else {
//     const resData = await response.json();
//     return resData.event;
//   }
// }

export async function loader() {
  const response = await fetch('https://assignment-4-15b74-default-rtdb.firebaseio.com/contacts.json',{
    method:"GET",
    headers:{
      'Content-Type':'application/json'
    }
  })
    
  console.log(response);

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    throw json(
      { message: 'Could not fetch events.' },
      {
        status: 500,
      }
    );
  } else {
    console.log(response.json);
    const resData = await response.json();
    console.log(resData);
    let contactData=[];
    for(const key in resData){
       contactData.push({
        id:key,
        name:resData[key].name,
        company:resData[key].company,
        designation:resData[key].designation,
        phone:resData[key].phone,
        address:resData[key].address,
        email:resData[key].email,
        contactId:resData[key].id
       })
    }
    return contactData;
  }

}


    
 
