import { Form,redirect,json, useLoaderData, useParams } from "react-router-dom";
import Contacts from "./Contacts";
function ContactForm({method="post",contactData}){
  const params=useParams();
  console.log(params);
    return(
         <Form method={method}>
             Enter your name:<input type={"text"} name="name" defaultValue={contactData ? contactData.name : ""}/>
             <br/>
             Email:<input type={"email"} name="email" defaultValue={contactData ? contactData.email : ""}/>
             <br/>
             Phone:<input type= {"text"} name="phone" defaultValue={contactData ? contactData.phone : ""}/>
             <br/>
             Company:<input type={"text"} name="company" defaultValue={contactData ? contactData.company : ""}/>
             <br/>
             Address:<input type={"text"} name="address" defaultValue={contactData ? contactData.address : ""}/>
             <br/>
             Designation:<input type={"text"} name="designation" defaultValue={contactData ? contactData.designation : ""}/>
             <br/>
             <button type="submit">Submit</button>

         </Form>
    )
}

export default ContactForm;

export async function action({request,params}) {

  console.log("action called")
  console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", params);
    // const { request,params } = data1;
    const method = request.method;
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

   if(method==="PATCH"){
    console.log(params.id)
    const response=await fetch(`https://assignment-4-15b74-default-rtdb.firebaseio.com/contacts/${params.id}.json`,{
      method:method,
      body:JSON.stringify(contactData),
      headers:{
        'Content-Type':'application/json'
      }
    })
      if(!response.ok){
         throw json({message:'Could Not Load Data'},{status:500})
      }
   }else{
    const response=await fetch("https://assignment-4-15b74-default-rtdb.firebaseio.com/contacts.json",{
      method:method,
      body:JSON.stringify(contactData),
      headers:{
        'Content-Type':'application/json'
      }
    })
      if(!response.ok){
         throw json({message:'Could Not save Data'},{status:300})
      }
   }
    return redirect('/');
  }

  