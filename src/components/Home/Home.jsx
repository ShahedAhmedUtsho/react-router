import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";


const Home = () => {
    const navigation = useNavigation()
    return (
        <div className="max-w-[1270px] mx-auto">

          <Header></Header>
          {
            navigation.state === "loading" ? 
            <p className="text-5xl">Loading...</p> :
            <Outlet></Outlet>

          }
            
            
        </div>
    );
};

export default Home;