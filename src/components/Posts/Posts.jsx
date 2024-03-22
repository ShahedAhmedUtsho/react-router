import { useLoaderData } from "react-router-dom";
import Post from "./Post/Post";

const Posts = () => {
    const posts= useLoaderData();
   
    return (
        <div>
              <div className=" bg-stone-200 min-h-96 my-5 p-5 grid grid-cols-3 gap-4">
           {
            posts.map((post)=> <Post key={post.id} post={post}></Post>)
           }
        </div>
            
        </div>
    );
};

export default Posts;