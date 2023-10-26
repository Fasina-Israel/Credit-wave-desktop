import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import './addinput.css';

const AddInput = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    return (
        <div className="addinput-container">
            <div className="addinput-second-container">
                <form className="form-input">
                    <div className="form-input-labin">
                        <label htmlFor="first_name">First Name</label>
                        <input placeholder="Ejiro" required type="text" className="addinput" />
                    </div>
                    <div className="form-input-labin">
                        <label htmlFor="last_name">Last Name</label>
                        <input placeholder="Henry" required type="text" className="addinput" />
                    </div>
                    <div className="form-input-labin">
                        <label htmlFor="email">Email</label>
                        <input placeholder="Henry@gmail.com" required type="email" className="addinput" />
                    </div>
                    <div className="role-input">
                        <label htmlFor="role">Role</label>
                        <div className="addinput-contain">
                            <select className="role-select">
                                <option value="">Select an Option</option>
                                <option value="Admin"> Admin</option>
                                <option value="finance_manager">Finance Manager</option>
                            </select>
                            <div className="delete-icon">
                                <RiDeleteBinLine size={25} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddInput;
