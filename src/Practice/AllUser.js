import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Pages/Shared/Loading';
import UserRow from './UserRow';

const AllUser = () => {

    const {data: users, isLoading, refetch} = useQuery(['users'], () => fetch(`http://localhost:5000/user`, {
        method: "GET",
        headers: {
          // "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        }}).then(res => res.json()));
    if(isLoading){
        return <Loading></Loading>
    }

    const deleteUser = id =>{
        const proceed = window.confirm('Are you sure to delete');
        if(proceed){
            // console.log('delete user btn clicked', id);
            fetch(`http://localhost:5000/user/${id}`,{
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                toast.success('User is deleted');
                refetch()
            })
        }
       
    }
    return (
        <div>
        <h2 className="my-2 font-medium">All users page : {users.length} </h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {
                  users.map((user, index) => <UserRow user={user} refetch={refetch} deleteUser={deleteUser}  index={index} key={user._id}></UserRow>)
              }
              
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllUser;