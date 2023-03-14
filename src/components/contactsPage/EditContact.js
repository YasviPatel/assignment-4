import { useParams, useLoaderData,json, useRouteLoaderData } from "react-router-dom";
import ContactForm from "./ContactForm";
import { loader } from "./Contacts";
function EditContact(){
  // const id=useRouteLoaderData("contact-detail");
  // console.log(id);
  // const data=useRouteLoaderData('contactItem');
  const data=useLoaderData();
  console.log(data);
  const contactId=useParams();
  console.log(contactId);
  return <ContactForm method="PATCH" contactData={data}/>
}

export default EditContact;

export async function loaderEdit({params}) {
  console.log(params);
  const response = await fetch(`https://assignment-4-15b74-default-rtdb.firebaseio.com/contacts/${params.id}.json`,{
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
    let contactData={
        name:resData.name,
        company:resData.company,
        designation:resData.designation,
        phone:resData.phone,
        address:resData.address,
        email:resData.email,
        contactId:resData.id
       }
    console.log(contactData);
    return contactData;
  }

}