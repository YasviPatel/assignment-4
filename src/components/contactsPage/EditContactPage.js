import { Outlet } from "react-router-dom";

function EditContactPage(){
   return(
    <>
      <h3>Edit contact</h3>
      <Outlet/>
    </>
   )
}

export default EditContactPage;