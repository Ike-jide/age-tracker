import React, { useState } from 'react';
import AddUser from './componets/User/AddUser';
import UserList from './componets/User/UserList';


function App() {
  const [userList, setUserList]= useState('')
  return (
    <div>
    <AddUser/>
    <UserList users={[]}/>
    </div>
  );
}

export default App;
