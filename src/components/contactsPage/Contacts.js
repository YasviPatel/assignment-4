import { useEffect, useRef, useState } from "react";
import { RiContactsBook2Fill } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import {
  useNavigate,
  json,
  defer,
  useLoaderData,
  Link,
  useRouteLoaderData,
  Outlet,
} from "react-router-dom";
import ContactList from "./ContactList";
import classes from "./Contacts.module.css";
const Contacts = () => {
  // const [loading,setLoading]=useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // },[]);
  const contactData = useLoaderData();
  const navigate = useNavigate();
  console.log(contactData);

  const [contactList, setContactList] = useState(contactData);
  useEffect(() => {
    if (contactData.length > 0) {
      setContactList(contactData);
    }
  }, [contactData]);
  const queryRef = useRef("");
  let contactFiltered = [];

  function searchContactHandler() {
    //  setQuery(event?.target.value)
    console.log("srch hndlr ran");
    //  querySearch=query;
    //  contactFiltered=contactData.filter(ele=>ele.name.toLowerCase().includes(query));
    contactFiltered = contactData.filter((ele) =>
      ele.name.toLowerCase().includes(queryRef.current.value)
    );
    console.log(queryRef.current.value);
    //  console.log(queryRef.current.value)
    console.log(contactFiltered);
    setContactList(
      queryRef.current.value === "" ? contactData : contactFiltered
    );
    console.log(contactList);
  }
  function addContactHandler() {
    navigate("contactForm");
  }
  return (
    <>
      <div className={classes.parent}>
        <div className={classes.main}>
          <div className={classes.main2}>
            {/* <div className={classes.contacts1}>
           <AiOutlineContacts/> */}
            <div className={classes.contactIcons}>
              <div>
                <RiContactsBook2Fill className={classes.contactIcon} />
              </div>
              <div className={classes.contacts}>
                <p>
                  <span style={{color:"black",fontSize:"16px"}}>Contacts</span>
                  <br /> <span style={{color:"grey",fontSize:"12px"}}>Welcome to contacts page</span>
                </p>
              </div>
            </div>
            {/* </div> */}
            <div className={classes.main1}>
              <AiOutlineSearch className={classes.iconsearch} />
              <input
                type={"search"}
                placeholder="search contacts..."
                onChange={searchContactHandler}
                ref={queryRef}
              />
              <button onClick={addContactHandler}>+ Add contact</button>
            </div>

            <div className={classes.contactHeader}>
              <p className={classes.basicInfo}>Basic Info</p>
              <p>Company</p>
            </div>
          </div>
          <div className={classes.main3}>
            <div className={classes.mainContactList}>
              {contactList.length == 0 ? (
                <p style={{ fontWeight: "bold", textAlign: "center" }}>
                  No contacts to show!
                </p>
              ) : (
                <ContactList contactDataList={contactList} />
              )}
            </div>
          </div>
        </div>
        <div className={classes.outlet}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Contacts;

export async function loader() {
  const response = await fetch(
    "https://assignment-4-15b74-default-rtdb.firebaseio.com/contacts.json",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  console.log(response);

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    throw json(
      { message: "Could not fetch contacts." },
      {
        status: 500,
      }
    );
  } else {
    console.log(response.json);
    const resData = await response.json();
    console.log(resData);
    let contactData = [];
    for (const key in resData) {
      contactData.push({
        id: key,
        name: resData[key].name,
        company: resData[key].company,
        designation: resData[key].designation,
        phone: resData[key].phone,
        address: resData[key].address,
        email: resData[key].email,
        contactId: resData[key].id,
      });
    }
    return contactData;
  }
}
