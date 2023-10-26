import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import { RiDeleteBinLine } from 'react-icons/ri';
import { IoIosAdd, IoIosClose } from 'react-icons/io';
import { Scrollbars } from 'react-custom-scrollbars';

const ManageUsersButton = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [admin, setAdmin] = useState('');
    const [financial, setFinancial] = useState();

    const [inputList, setInputList] = useState([
        {
            inputs: ''
        }
        // {
        //     inputs: ''
        // },
        // {
        //     inputs: ''
        // },
        // {
        //     inputs: ''
        // },
        // {
        //     inputs: ''
        // }
    ]);

    const onClickFirst = (e) => {
        setFirstName(e.target.value);
    };
    const onClickLast = (e) => {
        setLastName(e.target.value);
    };
    const onClickEmail = (e) => {
        setEmail(e.target.value);
    };
    const onClickAdmin = (e) => {
        setAdmin(e.target.value);
    };
    const onClickFinancial = (e) => {
        setFinancial(e.target.value);
    };

    const navigate = useNavigate();

    const inviteSB = (e) => {
        e.preventDefault();
        navigate('/inviteSuccess');
    };

    return (
        <div className="manage-users-button-container">
            <div className="manage-users-btn">
                <Button
                    onClick={handleOpen}
                    sx={{
                        width: '10rem',
                        fontWeight: 900,
                        fontFamily: 'IBM Plex Sans',
                        textTransform: 'capitalize',
                        border: 'none',
                        backgroundColor: '#0EAA4F',
                        color: '#FFF',
                        outline: '#0EAA4F solid 1px',
                        marginLeft: '80%',
                        '&:hover': {
                            color: '#FFF',
                            backgroundColor: '#0EAA4F',
                            outline: '#0EAA4F solid 1px'
                        }
                    }}
                >
                    Invite
                </Button>
            </div>
            <div></div>
            <Modal open={open} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
                <Box sx={{ width: "57%", background: '#F5F5F5', height: 500, margin: '8rem auto', borderRadius: '10px' }}>
                    <div className="box-modal-container">
                        <div className="modal-close-icon">
                            <IoIosClose size={40} style={{ margin: '.4rem 4rem', cursor: 'pointer' }} onClick={handleClose} />
                        </div>
                        <div className="modal-write-up">
                            <h2>Invite Colleague</h2>
                            <p style={{ textAlign: "center", lineHeight: '20px' }}>
                                Add Users and assign specific role for them, <br />
                                this will help them add more value to your <br />
                                institution and oversight function.
                            </p>
                        </div>
                        {/* <div style={{ height: '160px' }}>
                            <div className="trainee-input-section" style={{ margin: '2rem 2rem', position: 'relative' }}>
                                <div className="trainee-input">
                                    <p style={{ color: 'black' }}>First Name</p>

                                    {inputList.map((singleList, index) => (
                                        <input
                                            key={index}
                                            className="input-field"
                                            id="firstName"
                                            type="text"
                                            name="cohortName"
                                            placeholder="Blessing"
                                            value={firstName}
                                            onChange={onClickFirst}
                                        />
                                    ))}
                                </div>
                                <div className="trainee-input">
                                    <p style={{ color: 'black' }}>Last Name</p>
                                    {inputList.map((singleList, index) => (
                                        <input
                                            key={index}
                                            className="input-field"
                                            id="lastName"
                                            type="text"
                                            name="cohortName"
                                            placeholder="Asuilemen"
                                            value={lastName}
                                            onChange={onClickLast}
                                        />
                                    ))}
                                </div>
                                <div className="trainee-input">
                                    <p style={{ color: 'black' }}>Email</p>
                                    {inputList.map((singleList, index) => (
                                        <input
                                            key={index}
                                            className="input-field"
                                            id="traineeEmail"
                                            type="email"
                                            name="cohortName"
                                            placeholder="Henry2gmail.com"
                                            value={email}
                                            onChange={onClickEmail}
                                        />
                                    ))}
                                </div>
                                <div className="trainee-input" style={{ display: 'flex', flexDirection: 'column' }}>
                                    <p style={{ color: 'black' }}>Role</p>
                                    {inputList.map((singleList, index) => (
                                        <>
                                            <select className="role-field" style={{ display: 'flex', flexDirection: 'row' }} key={index}>
                                                <option>--select--</option>
                                                <option value={admin} onClick={onClickAdmin}>
                                                    Admin
                                                </option>
                                                <option value={financial} onClick={onClickFinancial}>
                                                    Finance Manager
                                                </option>
                                            </select>
                                            <div className="delete-icon">
                                                <RiDeleteBinLine size={20} style={{ cursor: 'pointer' }} />
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </div> */}
                        {/* <div className="add-more-button">
                                <div>
                                    <IoIosAdd size={23} style={{ cursor: 'pointer' }} />
                                </div>
                                <button>Add more</button>
                            </div>
                        </div> */}
                        <div className="input-modal-container">
                            <Scrollbars>
                                <div className="input-modal-second-container">
                                    <div className="input-modals">
                                        <div className="input-input-main" style={{ columnGap: '10px' }}>
                                            <p>First Name</p>
                                            {inputList.map((singleInput, i) => (
                                                <input type="text" name="first_name" placeholder="Blessing" required key={i} />
                                            ))}
                                        </div>
                                        <div className="input-input-main">
                                            <p>Last Name</p>
                                            {inputList.map((singleInput, i) => (
                                                <input type="text" name="last_name" placeholder="Asuelimen" required key={i} />
                                            ))}
                                        </div>
                                        <div className="input-input-main">
                                            <p>Email</p>
                                            {inputList.map((singleInput, i) => (
                                                <input type="email" name="email" placeholder="Henry2gmail.com" required key={i} />
                                            ))}
                                        </div>
                                        <div className="input-input-main">
                                            <p>Role</p>
                                            {inputList.map((singleInput, i) => (
                                                <select className="class-select-role" key={i}>
                                                    <option>--select--</option>
                                                    <option value={admin} onClick={onClickAdmin}>
                                                        Admin
                                                    </option>
                                                    <option value={financial} onClick={onClickFinancial}>
                                                        Finance Manager
                                                    </option>
                                                </select>
                                            ))}
                                        </div>
                                        {inputList.map((singleInput, i) => (
                                            <div className="delete-input-modal">
                                                <div></div>

                                                <RiDeleteBinLine size={20} style={{ cursor: 'pointer' }} key={i} />
                                            </div>
                                        ))}
                                    </div>

                                    {/* <div className="add-more-button">
                                    <div>
                                        <IoIosAdd size={23} style={{ cursor: 'pointer' }} />
                                    </div>
                                    <button>Add more</button>
                                </div> */}
                                </div>
                            </Scrollbars>
                        </div>

                        <div className="invite-btn-btn">
                            <button onClick={inviteSB}>Invite</button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default ManageUsersButton;
