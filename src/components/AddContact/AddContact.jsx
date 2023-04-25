import React, { useState } from "react";
import "../AddContact/AddContact.css";
const AddContact = (props) => {
  // создали события для хранения данных контактов
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mail, setMail] = useState("");
  const handleInput = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "surname":
        setSurname(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "mail":
        setMail(value);
        break;
      default:
        break;
    }
  };

  // функция срабатывает при нажатии на кнопку add
  const handleAdd = () => {
    if (!name && !surname && !phoneNumber && !mail) {
      alert("Please fill in all fields!");
      return;
    }
    const newInfo = {
      name: name,
      surname: surname,
      phoneNumber: phoneNumber,
      mail: mail,
      id: Date.now(),
    };
    props.handleContact(newInfo);
    setName("");
    setSurname("");
    setPhoneNumber("");
    setMail("");
  };
  return (
    <div className="wrapper">
      <h2>Contact Book</h2>
      <div className="main">
        <div className="form-container">
          <label>Name</label>
          <input
            type="text"
            value={name}
            className="form-control"
            name="name"
            onChange={handleInput}
          />
          <br />
          <label>Surname</label>
          <input
            className="form-control"
            type="text"
            value={surname}
            name="surname"
            onChange={handleInput}
          />
          <br />
          <label>Phone Number</label>
          <input
            className="form-control"
            type="text"
            value={phoneNumber}
            name="phoneNumber"
            onChange={handleInput}
          />
          <br />
          <label>E-Mail address</label>
          <input
            type="text"
            value={mail}
            className="form-control"
            name="mail"
            onChange={handleInput}
          />
          <br />
          <button onClick={handleAdd} className="btn btn-warning btn-md">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
