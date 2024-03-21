import { Link } from "react-router-dom";



const Header = () => {
    return (
        <div className="min-h-20  flex justify-between items-center border-b-[1px]  border-stone-300">
            <h2 className=" text-2xl font-bold">Router</h2>
            <ul className="flex font-semibold text-base capitalize w-1/3  justify-around">
            <li> <Link to="/">Home</Link> </li>
                <li><Link to="About">About</Link></li>
                <li><Link to="Contact">Contect</Link></li>
                <li><Link to="users">users</Link></li>
                

                
                
            </ul>
            
        </div>
    );
};

export default Header;