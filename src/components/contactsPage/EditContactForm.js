import { useParams, useLoaderData } from "react-router-dom";
import AddContactForm from "./AddContactForm";
import { loader } from "./Contacts";
function EditContactForm(){
  const contactData=useLoaderData();
  const contactId=useParams();
  console.log(contactData);
  return <AddContactForm method="PATCH" />
}

export default EditContactForm;

export async function loaderEdit() {
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
      if(resData[key].id===contactId){
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
    }}
    return contactData;
  }

}