import React from "react";
import "./ContactList.css";
const ContactList = (props) => {
  return (
    <div className="todoList">
      <h2>Contacts</h2>
      {props.contacts.map((contact, index) => (
        <div
          className="contacts"
          key={`${contact.firstName} ${contact.surname}`}
        >
          <h3>Name: {contact.name}</h3>
          <h3>Surname: {contact.surname}</h3>
          <h3>Number: {contact.number}</h3>
          <div className="btndIv">
            <button onClick={() => props.editContacts(index)}>edit</button>
            <button onClick={() => props.deleteContact(contact.id)}>
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
