import Router from "./router/Router.jsx";
import {useState} from "react";
import PublicRoutes from "./router/routes/publicRoutes.jsx";

const App = ()=> {

    const [allRoutes , setAllRoutes] = useState([...PublicRoutes]);
    console.log(allRoutes);
    return <Router allRoutes={allRoutes}/>

}

export default App
