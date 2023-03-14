import { useNavigation } from "react-router-dom";
import classes from "./HomePage.module.css";

function HomePage(){
    const nav=useNavigation();
    return(
        <div className={classes.loadingPage}>
          {nav.state==="loading"&& <div className={classes.loading}>Loading...</div>}
        </div>
    )
}

export default HomePage;