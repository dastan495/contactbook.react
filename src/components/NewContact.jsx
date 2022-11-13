import React, { useState } from 'react';
import './NewContact.css';

const NewContact = ({ handleContact }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [number, setNumber] = useState('');
    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleSurname = (e) => {
        setSurname(e.target.value);
    };
    const handleNumber = (e) => {
        setNumber(e.target.value);
    };
    const handleAdd = () => {
        let newContact = {
            name: name,
            surname: surname,
            number: number,
            id: Date.now(),
        };
        handleContact(newContact);
        setName('');
        setSurname('');
        setNumber('');
    };
    return (
        <div className="newContactArea">
            {/* <h2>ontactBook</h2> */}
            <img src="https://pngimg.com/uploads/whatsapp/whatsapp_PNG9.png" alt="" />
            <div  className='main_inp'>
            <div>
                <input className='inp' type="text" placeholder="Name" onChange={handleName} />
            </div>
            <div>
                <input className='inp' type="text" placeholder="Surname" onChange={handleSurname} />
            </div>
            <div>
                <input className='inp' type="text" placeholder="Number" onChange={handleNumber} />
            </div>
            <button className='btnAdd' onClick={handleAdd}>Add contact</button>
        </div>
        </div>
    );
};

export default NewContact;