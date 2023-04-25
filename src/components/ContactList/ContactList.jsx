import React from "react";
import "../AddContact/AddContact.css";
import { Table } from "react-bootstrap";
const ContactList = (props) => {
  console.log(props);

  return (
    <div className="wrapper">
      <h2>Contacts Informations</h2>
      <Table>
        <thead className="view-container ">
          <tr>
            <th>Name</th>
            <th> Surname</th>
            <th>Phone Number</th>
            <th>E-Mail Address</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="tbody-container ">
          {props.contacts.map((elem) => (
            <tr key={elem.id}>
              <th>{elem.name}</th>
              <th>{elem.surname}</th>
              <th>{elem.phoneNumber}</th>
              <th>{elem.mail}</th>
              <th>
                <button
                  onClick={() => props.handleEdit(elem)}
                  className="delete-btn btn btn-warning btn-md"
                >
                  edit
                </button>
                <button
                  onClick={() => props.handleDelete(elem.id)}
                  className="delete-btn btn btn-warning btn-md"
                >
                  delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ContactList;
