import React from 'react';
import './addinput.css';

const addInputLabel = () => {
    return (
        <div className="addinput-container">
            <div className="addinput-second-container">
                <form className="form-input">
                    <div className="form-input-labin">
                        <input placeholder="Ejiro" required type="text" className="addinput" />
                    </div>
                    <div className="form-input-labin">
                        <input placeholder="Henry" required type="text" className="addinput" />
                    </div>
                    <div className="form-input-labin">
                        <input placeholder="Henry@gmail.com" required type="email" className="addinput" />
                    </div>
                    <div className="role-input">
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

export default addInputLabel;
