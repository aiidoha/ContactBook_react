import React, { useState } from 'react'
import AddContact from './components/AddContact/AddContact'
import ContactList from './components/ContactList/ContactList'
import EditContact from './components/EditContact/EditContact';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  //contacts - создаем состояние в котором будут хранится все контакты и из которого будем делать отображенеи

const [contacts, setContacts] = useState([]);

// состояние к которым будет хранится редактируемый, начальное состояние в виде объекта
const [editContact, setEditContact] = useState({});
// состояние для отображения модального окна
const [modal, setModal] = useState(false);
// функция для обновления массива 
const handleContact = (newObj)=>{
  let newContact = [...contacts];
  newContact.push(newObj);
  setContacts(newContact);
}

// функция для удаления contact 
const handleDelete = (id)=>{
  let newContacts = contacts.filter((item)=>item.id !== id);
  setContacts(newContacts);
};
const handleEdit = (contactToEdit) =>{
  setModal(true);
  setEditContact(contactToEdit)
}


// функция для закрытия модалки
const handleCloseModal = ()=>{
  setModal(false)
}
// функция для созранения отредактированного contact
const handleSaveContact = (updatedContact)=>{
  const newContacts = contacts.map((item)=>{
    if(item.id === updatedContact.id){
      return updatedContact;
    }
    return item;
  })
  setContacts(newContacts);
  handleCloseModal();
}
  return (
    <div>
      <AddContact handleContact = {handleContact}/>
      <ContactList contacts = {contacts} handleDelete={handleDelete} handleEdit = {handleEdit}/>
      {modal ? <EditContact editContact = {editContact} handleCloseModal={handleCloseModal} handleSaveContact={handleSaveContact}/> : null}
      
    </div>
  )
}

export default App