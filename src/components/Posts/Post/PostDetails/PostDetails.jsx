import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const postDetails = useLoaderData();
    const {body,title} = postDetails;
    const goBack = useNavigate();
    const handleGoBack = () => {
        goBack(`/posts`)
    }
  
    return (
        <div  className='p-2 border-2 border-black rounded-xl'>
            
             
            <h2 className='text-bold text-xl mb-4 font-semibold text-slate-900 capitalize'>{title}</h2>
            <p className='text-base text-slate-500    leading-2'>{body}</p>
            <button onClick={handleGoBack} className='px-3 py-2 mx-auto mt-4 border-2  border-stone-700 rounded-xl'>show details</button>
            
        
            
        </div>
    );
};

export default PostDetails;