import React from 'react';
import AddUser from './componets/User/AddUser';
import UserList from './componets/User/UserList';


function App() {
  return (
    <div>
    <AddUser/>
    <UserList users={[]}/>
    </div>
  );
}

export default App;
