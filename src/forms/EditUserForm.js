import React, { useState, useEffect } from 'react';





const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = event => {
    const { name, value } = event.target 

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  return (
    <form 
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>First Name</label>
      <input 
        type="text"
        name="first name"
        value={user.firstName}
        onChange={handleInputChange}
      />
       <label>Last Name</label>
      <input 
        type="text"
        name="last name"
        value={user.lastName}
        onChange={handleInputChange}
      />
      <label>Company</label>
      <input 
        type="text"
        name="company"
        value={user.company}
        onChange={handleInputChange}
      />
         <div className="form-group notes">
      <label htmlFor="">Notes</label>
      <textarea 
        className = "form-control"
        type="text-area" 
        rows="3"
        name="notes" 
        value={user.notes}
        onChange={handleInputChange}
      />
    </div>
      <button>UPDATE</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>

    </form>
  );
}
export default EditUserForm;
