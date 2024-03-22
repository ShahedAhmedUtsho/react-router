
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const User = ({user}) => {
    const {name,phone,email,id}=user;
    return (
        <Link  to={`/user/${id}`}  className="  col-span-1 border-[1px] border-black p-2 rounded-xl min-h-44">
            <h2 className="text-xl font-bold">{name}</h2>
            <h3 className="text-base">{phone}</h3>
            <h3 className="text-sm mb-8">{email}</h3>
            
        </Link>
    );
};
User.propTypes = {
    user:PropTypes.object
}

export default User;