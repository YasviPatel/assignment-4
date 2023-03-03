import { Form,redirect,json } from "react-router-dom";
import Contacts from "./Contacts";
function AddContactForm(){
    return(
         <Form method="post" action="/AddContactForm">
             Enter your name:<input type={"text"} name="name"/>
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
  
    const eventData = {
        name:data.get("name"),
        email:data.get("email"),
        phone:data.get("phone"),
        comapny:data.get("comapny"),
        address:data.get("address"),
        designation:data.get("designation")
    };
  
    let url = 'https://console.firebase.google.com/project/assignment-4-15b74/database/assignment-4-15b74-default-rtdb/:';
  
    // if (method === 'POST') {
    //   const eventId = Math.random();
    //   url = 'https://console.firebase.google.com/project/assignment-4-15b74/database/assignment-4-15b74-default-rtdb/:' + eventId;
    // }
    console.log(url);
  
    const response = await fetch(url);
    if (!response.ok) {
      throw json({ message: 'Could not save event.' }, { status: 500 });
    }
    const responseData=await response.json();
    for(const key in responseData){
       
    }
  
    return redirect('/');
  }