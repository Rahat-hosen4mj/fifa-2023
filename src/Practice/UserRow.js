import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, index, deleteUser, refetch}) => {
    const {email, role} = user;
    const makeAdmin = () =>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method: "PUT",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        })
        .then(res => res.json())
        .then(data => {
            toast.success('Succesfully make an admin');
            refetch()
        })
    }
    // console.log(user);
    return (
        <tr>
      <th>{index + 1}</th>
      <td>{user.email}</td>
      <td>
       {role? <p className='text-green-400 font-medium'>{role}</p> : <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin </button> } 
        {/* {role === 'amdin' ? role :  <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin </button> } */}
         {/* {role !== 'admin' && 
          </button> }
          */}
     
      </td>
      <td><button onClick={() => deleteUser(user._id)} className="btn btn-xs">
        Remove user
          </button></td>
    </tr>
    );
};

export default UserRow;