import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Home = () => {
    return (
        <div className="max-w-[1270px] mx-auto">

          <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Home;