import { Outlet } from "react-router-dom";
import NavigationBar from "../sideBar/NavigationBar"
import classes from "./Root.module.css";

function Root(){
    return(
    <div className={classes.main}>
    {/* Hello from Root */}
    <NavigationBar/>
    <main>
        <Outlet/>
    </main>
    </div>
    )
}

export default Root;