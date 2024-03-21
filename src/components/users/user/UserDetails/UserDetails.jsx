import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {name,phone,email} =user;
    return (
        <div>
             <div className="  inline-block min-w-56 text-center border-[1px] border-black p-2 rounded-xl min-h-44">
            <h2 className="text-xl font-bold">{name}</h2>
            <h3 className="text-base">{phone}</h3>
            <h3 className="text-sm mb-8">{email}</h3>
            
        </div>
            
        </div>
    );
};

export default UserDetails;