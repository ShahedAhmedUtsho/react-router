import { useLoaderData } from "react-router-dom";
import User from "./user/User";


const Blog = () => {
    const users = useLoaderData()
    console.log(users)
    return (
        <div>
            <div className=" bg-stone-200 min-h-96 my-5 p-5">
           
            <div className="grid grid-cols-4 gap-3 text-center">
                {
                    users.map(user => <User user={user} key={user.id}></User>)
                }
            </div>

        </div>
    
            
        </div>
    );
};

export default Blog;