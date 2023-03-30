import { useSelector } from 'react-redux'
import axios from 'axios';
import { BiEdit } from 'react-icons/bi';
import {RiDeleteBin2Fill} from 'react-icons/ri'
//Dialog
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import UpdateUser from '../updateUsers/UpdateUser';

const User = ({user}) => {
  const users = useSelector((state) => state.auth.login.currentUser);
  const deleteUsers = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/delete/${id}`);
    window.location.reload(false);
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    
    <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[10px] w-full max-w-[352px] ms:max-w-[280px] ss:max-w-[240px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      {/* <img className='mb-8' src={user.image} alt='' /> */}
      <div className='text-base font-medium max-w-[260px]'>Tài khoản: {user.username}</div>
      <div className='text-base font-medium max-w-[260px]'>Email: {user.email}</div>
      <div className='text-base font-medium max-w-[260px]'>Sđt: {user.phone}</div>
      {users?.isAdmin && 
      <div className='mb-3 mt-4 justify-center flex gap-x-2 text-sm'>
        
          <button className='flex flex-1 gap-1 mx-4 py-2 justify-center bg-green-500 hover:bg-green-800 text-lg rounded text-white px-3 inline-block' variant="outlined" onClick={handleClickOpen}>
          <BiEdit className='mt-1'></BiEdit>
          </button>
          <button className='flex flex-1 gap-1 mx-4 py-2 justify-center bg-blue-500 hover:bg-blue-800 text-lg rounded text-white px-3 inline-block' onClick={() => deleteUsers(user._id)}>
          <RiDeleteBin2Fill className='mt-1'></RiDeleteBin2Fill>
          </button>
        
      </div>
      }
        <Dialog  open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <UpdateUser id={user._id} />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Đóng</Button>
          </DialogActions>
        </Dialog>
    </div>
    
    
  )
}

export default User