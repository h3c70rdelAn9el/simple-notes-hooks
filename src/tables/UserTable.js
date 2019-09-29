import React from 'react';

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Company</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
    {props.users.length > 0 ? (
      props.users.map(user => (
      <tr>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.company}</td>
        <td>{user.notes}</td>

        <td>
          <button 
            onClick={() => {
              props.editRow(user)
            }}
            className="button muted-button">
              Edit
          </button>
          <button
            onClick={() => 
              props.deleteUser(user.id)}
            className="button muted-button">
              Delete
          </button>
        </td>
      </tr>
      ))
    ) : (
      <tr>
        <td colSpan={3}>No leads</td>
      </tr>
    )}
      
    </tbody>
  </table>
)

export default UserTable;
