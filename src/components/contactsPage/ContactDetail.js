import { useParams,json, useLoaderData,useRouteLoaderData,Link, Outlet} from "react-router-dom";
import classes from "./ContactDetail.module.css"
import Contacts from "./Contacts";

function ContactDetail(){
    const id=useParams();
    // const data=useRouteLoaderData('contactItem');
    const data=useLoaderData();
    console.log(data);
    console.log(data.name.split(" "));
   const profileLettersSplit = data.name.split(" ");
   console.log(profileLettersSplit);
   const firstLetter = profileLettersSplit[0].slice(0, 1).toUpperCase();
   let profileLetters = firstLetter;
   if (profileLettersSplit.length > 1) {
    const secondLetter = profileLettersSplit[1].slice(0, 1).toUpperCase();
    profileLetters = firstLetter.concat(secondLetter);
   }
    return(
        <>
        {/* <Contacts/> */}
        <div className={classes.details}>
          <div className={classes.circle}>
           <p>
            <span className={classes.circleSpan}>{profileLetters}</span>
           </p>
           <p style={{fontWeight:'bold',marginTop:'10px'}}>{data.name}</p>
           {data.designation && data.company && <p className={classes.position}>
             {data.designation} at {data.company}
           </p>}
          </div>
        <div className={classes.detailsName}>
          <div className={classes.property}>Full Name:</div>
          <div className={classes.value}>{data.name}</div>
        </div>
        <div className={classes.detailsEmail}>
          <div className={classes.property}>Email:</div>
          <div className={classes.value}>{data.email}</div>
        </div>
        <div className={classes.detailsPhone}>
          <div className={classes.property}>Phone:</div>
          <div className={classes.value}>{data.phone}</div>
        </div>
        <div className={classes.detailsCompany}>
          <div className={classes.property}>Company:</div>
          <div className={classes.value}>{data.company}</div>
        </div>
        <div className={classes.detailsAddress}>
          <div className={classes.property}>Address:</div>
          <div className={classes.value}>{data.address}</div>
        </div>
        <div className={classes.value}>
        <Link to={"edit"}><span className={classes.edit}>Edit</span></Link>
        </div>
        </div>
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
  
