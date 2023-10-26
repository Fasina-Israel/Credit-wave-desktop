import React, { useState } from 'react';
// import logo from './../../../assets/ContainerLogo.svg';
// import emptyProfile from './../../../assets/EmptyProfile.svg';
// import { ToggleButtonGroup, Button } from '@mui/material';
// import Profile from './../../../assets/profile.svg';
// import Activity from './../../..assets/activity.svg';
// import Users from './../../../assets/users.svg';
import logoutSvg from './../../../../assets/logout.svg';
import { useNavigate } from 'react-router';

const Logout = ({ handleLogoutModal, LogOutModal }) => {
    const navigate = useNavigate();
    const [status, setStatus] = useState('completeProfile');
    const [sideTab, setSideTab] = useState('profile');
    const auth = JSON.parse(window.sessionStorage.getItem('auth'));
    const handleToggle = () => {
        setStatus(status);
    };
    const confirmLogout = () => {
        handleLogoutModal(true)
    }
    const handleSideTab = () => {
        setSideTab(sideTab);
    };
    const handleLogout = () => {
        sessionStorage.clear();
        navigate('./login', { replace: true })
    }
    const [alignment, setAlignment] = useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (

        <div onClick={confirmLogout} style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#fff',
            color: '6px solid #5F646F',
            cursor: 'pointer',
            fontSize: '16px',
            height: '40px',
            width: '9rem',
            border: '2px solid #d0d5dd',
            cursor: "pointer"
        }}>
            <img src={logoutSvg} alt="" />
            <h4 sx={{
                padding: '0.5rem',
                border: '2px solid #d0d5dd',
                color: '3px solid #5F646F',
                width: '9rem',
                display: 'flex',
                height: '40px',
                flexDirection: 'row',
                justifyContent: 'spaceEvenly',
                alignItems: 'left',
                backgroundColor: 'white'
            }}>
                Logout
            </h4>
        </div>

    );
};

export default Logout;
