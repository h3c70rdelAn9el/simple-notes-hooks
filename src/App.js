import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';


const App = () => {

  const usersData = [
    { id: 1, firstName: 'Joseph', lastName: 'Fury', company: 'floppydisks', notes: 'Energy from space' },
    { id:2, firstName: 'Sebastian', lastName: 'Hawke', company: 'USBdongle', notes: 'Arrow man!' },
    { id:3, firstName: 'Samantha', lastName: 'Bisi', company: 'NiceGirls', notes: 'Crazy! '},
  ]

  const [users, setUsers] = useState(usersData);

  const addUser = user => {
    user.id = users.length + 1 
    setUsers([...users, user])
  };

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
    setEditing(false);
  };
  
  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, firstName: '', lastName: '', company: '', notes: '' };

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = user => {
    setEditing(true);

    setCurrentUser({ id: user.id, firstName: user.firstName, lastName: user.lastName, company: user.company, notes: user.notes });
  };

  const updateUser = (id, updateUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updateUser : user)));
  };


  return (
   <div className="grid-container"> 
    <h1 className="title header">Potential Contacts</h1>
      <div className="content-container">
            {editing ? (

      <div className="edit-container">
        
          <h2 className="title">Edit Interest</h2>
          <EditUserForm 
            editing={editing}
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
          />
        
      </div>
        ) : (

      <div className="main-container">
      <div className="container-left">
        <h2 className="title">Add user</h2>
        <AddUserForm addUser={addUser} />
      </div>


      <div className="container-right">
        <h2 className="title">View Leads</h2>
        <UserTable 
          users={users}
          editRow={editRow} 
          deleteUser={deleteUser}
        />
      </div>
      </div>
    )}
    </div>
    </div>
  );
}

export default App;
