import React, { useState } from 'react';
import './EditContact.css';

const EditContactModal = (props) => {
    let [contact, setContact] = useState(props.editContact);

    function nameEditInput(e) {
        let newObj = { ...contact };
        newObj.name = e.target.value;
        setContact(newObj);
    }
    function surnameEditInput(e) {
        let newObj = { ...contact };
        newObj.surname = e.target.value;
        setContact(newObj);
    }
    function numberEditInput(e) {
        let newObj = { ...contact };
        newObj.number = e.target.value;
        setContact(newObj);
    }
    function ContactSave() {
        props.saveContact(contact);
    }

    return (
        <div className="main-modal">
            <div className="inner-modal">
                <div className="close">
                    <button className='btnX' onClick={props.modalClose}>X</button>
                </div>
                <h2>Edit Contact</h2>
                <div>
                    <p>Name</p>
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={nameEditInput}
                        input={contact.name}
                    />
                </div>
                <div>
                    <p>Surname</p>
                    <input
                        type="text"
                        placeholder="Surname"
                        onChange={surnameEditInput}
                        input={contact.surname}
                    />
                </div>
                <div>
                    <p>Number</p>
                    <input
                        type="text"
                        placeholder="Number"
                        onChange={numberEditInput}
                        input={contact.number}
                    />
                </div>
                <button className='btnEditSave' onClick={ContactSave}>save</button>
            </div>
        </div>
    );
};

export default EditContactModal;