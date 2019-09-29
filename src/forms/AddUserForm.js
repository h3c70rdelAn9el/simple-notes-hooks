import React, { useState } from 'react';

const AddUserForm = props => {


const initialFormState = { id: null, firstName: '', lastName: '', company: '', notes: '' };

const [user, setUser] = useState(initialFormState);

const handleInputChange = event => {
  const { name, value } = event.target;

  setUser({ ...user, [name]: value });
};


  return (
    <form
      className="add-form"
      onSubmit={event => {
        event.preventDefault()
        if (!user.firstName || !user.lastName || !user.company || !user.notes) return 

        props.addUser(user)
        setUser(initialFormState)
      }}
    >
    <div className="form-group-row">
      <input
        className="form-control" 
        type="text" 
        name="firstName" 
        placeholder="First Name"
        value={user.firstName}
        onChange={handleInputChange}
      />
    </div>
    <div className="form-group">
      <input 
        className = "form-control"
        type="text" 
        name="lastName"
        placeholder="Last Name" 
        value={user.lastName}
        onChange={handleInputChange}
      />
    </div>
    <div className="form-group">
      <input 
        className = "form-control"
        type="text" 
        name="company" 
        placeholder = "Company"
        value={user.company}
        onChange={handleInputChange}
      />
    </div>
    <div className="form-group notes">
      <textarea 
        className = "form-control"
        type="text-area" 
        rows="2"
        cols="20"
        name="notes" 
        placeholder = "Notes"
        value={user.notes}
        onChange={handleInputChange}
      />
    </div>
    <button>Add user</button>
    </form>
  )
}

export default AddUserForm;
