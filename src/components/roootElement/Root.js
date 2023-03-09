import { Outlet } from "react-router-dom";
import NavigationBar from "../sideBar/NavigationBar"

function Root(){
    return(
    <>
    {/* Hello from Root */}
    <NavigationBar/>
    <main>
        <Outlet/>
    </main>
    </>
    )
}

export default Root;