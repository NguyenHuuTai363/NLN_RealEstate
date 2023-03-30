import React from 'react'
import User from './User'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllUsers} from '../../../redux/requestMethods.js'

const UserList = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const userList = useSelector((state) => state.users.users?.allUsers)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    // const getUsers = async() => {
    //   const res = await axios.get('http://localhost:5000/api/users');
    //   setUsers(res.data);
    // }
    // getUsers().catch((err) => console.log(err));

    if(!user) {
      navigate("/login");
    }
    if(user?.accessToken) {
      getAllUsers(user?.accessToken, dispatch);
    }
    
  }, []);

  return (
    <section className='mb-20'>
      
        <div className='container mx-auto'>
        <h1 className='text-2xl font-medium text-blue-500 py-5 sm:px-1'>Danh sách người dùng</h1>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
            {userList?.map((user, index) => {
              return (
                // <Link to={`/user/${user._id}`} key={index}>
                  <User user={user} key={index}/>
                // </Link>
              );
            })}
          </div>
        </div>
      </section>
  )
}

export default UserList