import { Form,redirect,json, useLoaderData, useParams, useActionData } from "react-router-dom";
import Contacts from "./Contacts";
import classes from "./ContactForm.module.css"
import { BsChevronBarContract } from "react-icons/bs";
function ContactForm({method="post",contactData}){
  const params=useParams();
  const error=useActionData();
  console.log(error);
  console.log(params);
    return(
      <>
         <Form method={method}>
          <div className={classes.form}>
            {method==="post" && <h2>Add details of new contact</h2>}
             Enter your name:*<input type={"text"} name="name" defaultValue={contactData ? contactData.name : ""} 
             className={error && error.nameError && classes.error } />
              {error && error.nameError && <p className={classes.errorMessage}>{error.nameError}</p>}
             <br/>
             Email:*<input type={"text"} name="email" defaultValue={contactData ? contactData.email : ""} 
             className={error && error.emailError && classes.error }/>
              {error && error.emailError && <p className={classes.errorMessage}>{error.emailError}</p>}
             <br/>
             Phone:*<input type= {"text"} name="phone" defaultValue={contactData ? contactData.phone : ""} 
             className={error && error.phoneError && classes.error }/>
              {error && error.phoneError && <p className={classes.errorMessage}>{error.phoneError}</p>}
             <br/>
             Company:<input type={"text"} name="company" defaultValue={contactData ? contactData.company : ""}/>
             <br/>
             Address:<input type={"text"} name="address" defaultValue={contactData ? contactData.address : ""} />
             <br/>
             Designation:<input type={"text"} name="designation" defaultValue={contactData ? contactData.designation : ""}/>
             <br/>
             <button type="submit">Submit</button>
             </div>
         </Form>
        </>
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
        name:data.get("name").trim(),
        email:data.get("email").trim(),
        phone:data.get("phone").trim(),
        company:data.get("company").trim(),
        address:data.get("address").trim(),
        designation:data.get("designation").trim(),
        id:myId
    };
    console.log(contactData);
    console.log(myId);

    let error={}

    if(contactData.name===""){
      error.nameError="Please enter name!"
    }

    if(contactData.email==="" || !contactData.email.includes("@") || !contactData.email.includes(".")){
      error.emailError="Please enter valid email!"
    }
    if(contactData.phone==="" || isNaN(contactData.phone) || contactData.phone.length > 11 || contactData.phone.length <10){
      error.phoneError="Please enter valid phone number!"
    }


    if(Object.keys(error).length>0){
       return error;
    }

   console.log(contactData);
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
    return redirect('/contacts');
  }

  