import React, { useState } from 'react';
import AddUser from './componets/User/AddUser';
import UserList from './componets/User/UserList';


function App() {
  const [usersList, setUsersList]= useState([])

 const addUserHandler = (uName,uAge) =>{
  setUsersList((prevUsersList)=>{
    return [...prevUsersList,{name:uName,age:uAge,id: Math.random().toString()}]
  })

 }

  return (
    <div>
    <AddUser onAddUser={addUserHandler}/>
    <UserList users={usersList}/>
    </div>
  );
}

export default App;
