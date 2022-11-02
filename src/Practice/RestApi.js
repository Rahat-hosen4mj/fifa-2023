import React, { useEffect } from 'react';
import { useState } from 'react';

const RestApi = () => {
    const [users, setUsers] = useState([]); 
   
   useEffect(() =>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data.slice(0,5)))
   },[]);

   
// function loadData(){
//     fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(res => res.json())
//     .then(data => setUsers(data))
// }
    return (

       <>
        <button className='btn btn-primary w-28'>load Data</button>
        <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th></th> 
              <th>Name</th> 
              <th>Email</th> 
              <th>City</th> 
              <th>Street</th> 
              <th>Phone</th>
            </tr>
          </thead> 
          <tbody>
             {
                users?.map((user, index) =>  <tr>
                    <th>{index +1}</th> 
                    <td>{user.name}</td> 
                    <td>{user.email}</td> 
                    <td>{user.address.city}</td> 
                    <td>{user.address.street}</td> 
                    <td>{user.phone}</td> 
                  </tr>)
             }
          </tbody> 
        </table>
      </div>
       </>
    );
};

export default RestApi;