import { useParams, useLoaderData,json, useRouteLoaderData } from "react-router-dom";
import AddContactForm from "./AddContactForm";
import { loader } from "./Contacts";
function EditContactForm(){
  // const id=useRouteLoaderData("contact-detail");
  // console.log(id);
  const data=useLoaderData();
  console.log(data);
  const contactId=useParams();
  console.log(contactId);
  return <AddContactForm method="PATCH" contactData={data}/>
}

export default EditContactForm;

export async function loaderEdit({params}) {
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
    let contactData=[];
      console.log(params.id)
       contactData.push({
        name:resData.name,
        company:resData.company,
        designation:resData.designation,
        phone:resData.phone,
        address:resData.address,
        email:resData.email,
        contactId:resData.id
       })
    console.log(contactData);
    return contactData;
  }

}