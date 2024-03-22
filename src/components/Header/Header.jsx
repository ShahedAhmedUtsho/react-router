import { NavLink } from "react-router-dom";



const Header = () => {
    return (
        <div className="min-h-20  flex justify-between items-center border-b-[1px]  border-stone-300">
            <h2 className=" text-2xl font-bold">Router</h2>
            <ul className="flex font-semibold text-base capitalize w-1/3  justify-around">
            <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/About">About</NavLink></li>
      <li><NavLink to="/posts">Posts</NavLink></li>
      <li><NavLink to="/Contact">Contact</NavLink></li>
      <li><NavLink to="/users">Users</NavLink></li>
                

                
                
            </ul>
            
        </div>
    );
};

export default Header;