import { useParams,json, useLoaderData, Link, Outlet} from "react-router-dom";

function ContactDetail(){
    const id=useParams();
    const data=useLoaderData();
    console.log(data);
    console.log(id);
    return(
        <>
        <ul>
            <li>{data.name}</li>
            <li>{data.designation}</li>
            <li>{data.address}</li>
        </ul>
        <Link to={"edit"}>Edit</Link>
        <Outlet/>
        </>
    )
}

export default ContactDetail;

export async function loader({params}) {
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
  
