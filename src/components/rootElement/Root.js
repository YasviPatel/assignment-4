import { Outlet } from "react-router-dom";
import NavigationBar from "../sideBar/NavigationBar"
import classes from "./Root.module.css";

function Root(){
    return(
    <div className={classes.main}>
    {/* Hello from Root */}
    <div className={classes.navBar}><NavigationBar/></div>
    <main>
        <Outlet/>
    </main>
    </div>
    )
}

export default Root;