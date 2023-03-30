import axios from 'axios';
import { BiBed, BiBath, BiArea, BiEdit } from 'react-icons/bi';
import {RiDeleteBin2Fill} from 'react-icons/ri'
import { useSelector } from 'react-redux'
//Dialog
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import UpdateProperty from '../updateProperty/UpdateProperty';

const AdminProperty = ({house}) => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const deleteProperty = async (id) => {
    await axios.delete(`http://localhost:5000/api/property/delete/${id}`);
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
        <img className='mb-8 rounded-lg' src={house.image} alt='' />
        <div className='mb-4 flex gap-x-2 text-sm'>
          <div className='bg-green-500 rounded text-white px-3 inline-block'>
            {house.type}
          </div>
          <div className='bg-blue-500 rounded text-white px-3 inline-block'>
            {house.country}
          </div>
        </div>
        <div className='text-lg font-semibold max-w-[260px]'>{house.address}</div>
        <div className='flex gap-x-4 my-4'>
          <div className='flex items-center text-gray-600 gap-0'>
            <div className='text-[20px] rounded-full'>
              <BiBed />
            </div>
            <div className='text-base'>{house.bedrooms}</div>
          </div>
          <div className='flex items-center text-gray-600 gap-1'>
            <div className='text-[20px] rounded-full'>
              <BiBath />
            </div>
            <div className='text-base'>{house.bathrooms}</div>
          </div>
          <div className='flex items-center text-gray-600 gap-1'>
            <div className='text-[20px] rounded-full'>
              <BiArea />
            </div>
            <div className='text-base'>{house.surface}</div>
          </div>
        </div>
        {/* Price */}
        <div className='text-base font-semibold text-blue-500 mb-4 flex flex-1'>
          $ {house.price}
          {user?.isAdmin && 
          <div className='flex gap-x-2 pl-28 lg:pl-9 md:pl-11 ms:pl-11 ss:pl-9 xl:mx-auto'>
              <button className='bg-green-500 hover:bg-green-800 text-lg rounded text-white px-3 inline-block' variant="outlined" onClick={handleClickOpen}>
                <BiEdit></BiEdit>
              </button>

              <button className='bg-blue-500 hover:bg-blue-800 text-lg rounded text-white px-3 inline-block' onClick={() => deleteProperty(house._id)}>
                <RiDeleteBin2Fill></RiDeleteBin2Fill>
              </button>
          </div>
          }
        </div>
        <Dialog  open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
          <DialogContent >
            <DialogContentText id="alert-dialog-description">
              <UpdateProperty id={house._id} />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Đóng</Button>
          </DialogActions>
        </Dialog>
        
      </div>
    )
}

export default AdminProperty