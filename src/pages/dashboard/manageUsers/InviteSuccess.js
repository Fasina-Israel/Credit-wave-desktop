import React from 'react';
import { IoIosClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import './inviteSuccess.css';
import successPage from '../../../../assets/success-gif/successPage.gif';

const InviteSuccess = () => {
    const navigate = useNavigate();

    const goBack = (e) => {
        e.preventDefault();

        navigate(-1);
    };

    const goToManageUsers = () => {
        navigate();
    };

    return (
        <div className="invite-container-success" style={{ width: '98vw', height: '100vh' }}>
            <div className="invite-success-second">
                <div className="invite-success-h2">
                    <div className="h2-div">
                        <h2>Colleague Invited Successfully </h2>
                    </div>
                    <div className="invite-success-close">
                        <IoIosClose size={45} style={{ cursor: 'pointer' }} onClick={goToManageUsers} />
                    </div>
                </div>
                <div className="gifys">
                    <div className="gifys-class">
                        <img src={successPage} alt="success gifs" />
                    </div>
                </div>
                <div className="welldone">
                    <div className="h5-p">
                        <h5>Well done!</h5>
                        <p>A mail has been sent to the colleague named above</p>
                    </div>
                </div>
                <div className="invite-btn">
                    <button onClick={goBack}>Dashboard</button>
                </div>
            </div>
        </div>
    );
};

export default InviteSuccess;
