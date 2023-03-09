import { Form,redirect,json, useLoaderData, useParams } from "react-router-dom";
import Contacts from "./Contacts";
function AddContactForm({method="post",contactData}){
  const params=useParams();
  console.log(params);
    return(
         <Form method={method} action="/AddContactForm">
             Enter your name:<input type={"text"} name="name" defaultValue={contactData ? contactData[0].name : ""}/>
             <br/>
             Email:<input type={"email"} name="email" defaultValue={contactData ? contactData[0].email : ""}/>
             <br/>
             Phone:<input type= {"text"} name="phone" defaultValue={contactData ? contactData[0].phone : ""}/>
             <br/>
             Company:<input type={"text"} name="company" defaultValue={contactData ? contactData[0].company : ""}/>
             <br/>
             Address:<input type={"text"} name="address" defaultValue={contactData ? contactData[0].address : ""}/>
             <br/>
             Designation:<input type={"text"} name="designation" defaultValue={contactData ? contactData[0].designation : ""}/>
             <br/>
             <button>Submit</button>

         </Form>
    )
}

export default AddContactForm;

export async function action({ request,params }) {
    const method = request.method;
    console.log(params,"hiiiiiiiiiiiiiiiiiiiii")
    const id=params.id;
    console.log(method);
    const data = await request.formData();
    let name1=data.get("name");
    console.log(name1);
    const myId = new Date().toISOString();
  
    const contactData = {
        name:data.get("name"),
        email:data.get("email"),
        phone:data.get("phone"),
        company:data.get("company"),
        address:data.get("address"),
        designation:data.get("designation"),
        id:myId
    };
    console.log(contactData);
    console.log(myId);

   if(method==="PATCH"){
    console.log(params.id)
    const response=fetch(`https://assignment-4-15b74-default-rtdb.firebaseio.com/contacts/${params.id}.json`,{
      method:'PATCH',
      body:JSON.stringify(contactData),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(response=>{
       console.log(response);
    })
   }else{
    const response=fetch("https://assignment-4-15b74-default-rtdb.firebaseio.com/contacts.json",{
      method:method,
      body:JSON.stringify(contactData),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(response=>{
       console.log(response);
    })
   }
    return redirect('/');
  }

  