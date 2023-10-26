import { Button, Modal } from '@mui/material';
import { useState } from 'react';
import SuccessReset from 'pages/auth/resetPassword/SuccessReset';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TraineeAddedSuccessFul = () => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="authLogo"
            >
                <div style={{ background: 'white', width: '90%', height: '90%' }} className="trainee-Modal-container">
                    <div className="success-contents">
                        <p className="published-header" style={{ fontSize: '18px' }}>
                            Trainee added successfully
                        </p>
                    </div>
                    <div>
                        <SuccessReset />
                    </div>
                    <div
                        style={{
                            justifyContent: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginTop: '1rem'
                        }}
                    >
                        <h4 style={{ fontSize: '16px' }}>Trainee has been added!</h4>
                        <p>Trainee has been added to the cohort</p>
                        <Button
                            onClick={() => {
                                navigate('/trainee/dashboard');
                            }}
                            sx={{
                                width: '15rem',
                                fontWeight: 900,
                                fontFamily: 'IBM Plex Sans',
                                textTransform: 'capitalize',
                                border: 'none',
                                backgroundColor: '#0EAA4F',
                                color: '#fff',
                                '&:hover': {
                                    color: '#fff',
                                    backgroundColor: '#0EAA4F'
                                }
                            }}
                        >
                            Dashboard
                        </Button>
                    </div>
                    {/* <div className="learnspace-seed2">
                        <img src={backgroundImage2} alt="learnspace-seed" />
                    </div> */}
                </div>
            </Modal>
        </div>
    );
};

export default TraineeAddedSuccessFul;
