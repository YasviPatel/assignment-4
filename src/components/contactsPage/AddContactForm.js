import { Form,redirect,json } from "react-router-dom";
import Contacts from "./Contacts";
function AddContactForm({method,contactData}){
    return(
         <Form method="post" action="/AddContactForm">
             Enter your name:<input type={"text"} name="name" defaultValue={contactData ? contactData.name : ""}/>
             <br/>
             Email:<input type={"email"} name="email"/>
             <br/>
             Phone:<input type= {"text"} name="phone"/>
             <br/>
             Company:<input type={"text"} name="company"/>
             <br/>
             Address:<input type={"text"} name="address"/>
             <br/>
             Designation:<input type={"text"} name="designation"/>
             <br/>
             <button>Submit</button>

         </Form>
    )
}

export default AddContactForm;

export async function action({ request }) {
    const method = request.method;
    console.log(method);
    const data = await request.formData();
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

  
    const response=fetch("https://assignment-4-15b74-default-rtdb.firebaseio.com/contacts.json",{
      method:method,
      body:JSON.stringify(contactData),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(response=>{
       console.log(response);
    })
  
    return redirect('/');
  }