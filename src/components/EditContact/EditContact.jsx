import React, { useState } from "react";
import "../EditContact/EditContact.css";

const EditContact = (props) => {
  const [item, setItem] = useState(props.editContact);
  const handleEditInput = (e) => {
    let newObj = { ...item };
    newObj.name = e.target.value;

    setItem(newObj);
  };
  const handleEditInput2 = (e) => {
    let newObj = { ...item };

    newObj.surname = e.target.value;

    setItem(newObj);
  };
  const handleEditInput3 = (e) => {
    let newObj = { ...item };

    newObj.phoneNumber = e.target.value;

    setItem(newObj);
  };
  const handleEditInput4 = (e) => {
    let newObj = { ...item };

    newObj.mail = e.target.value;

    setItem(newObj);
  };
  // console.log(newObj);

  // Modal

  return (
    <div className="main-modal">
      <div className="inner-modal">
        <div className="close-modal">
          <button className="closeModal-btn" onClick={props.handleCloseModal}>
            &times;
          </button>
        </div>
        <input
          value={item.name}
          onChange={handleEditInput}
          type="text"
          className="inp-edit"
        />
        <input
          value={item.surname}
          onChange={handleEditInput2}
          type="text"
          className="inp-edit"
        />
        <input
          value={item.phoneNumber}
          onChange={handleEditInput3}
          type="text"
          className="inp-edit"
        />
        <input
          value={item.mail}
          onChange={handleEditInput4}
          type="email"
          className="inp-edit"
        />
        <button
          className="saveMOdalChanges-btn"
          onClick={() => {
            props.handleSaveContact(item);
          }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditContact;
