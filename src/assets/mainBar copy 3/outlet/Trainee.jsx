import React, { useState } from 'react';
import logo from './../../../../../assets/ContainerLogo.svg';
import emptyProfile from './../../../../../assets/EmptyProfile.svg';
import { ToggleButtonGroup, Button } from '@mui/material';
import SearchIcon from '../../../../../assets/searchIcon.svg';

const Trainee = () => {
    const [status, setStatus] = useState('All');

    const [alignment, setAlignment] = useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <div className="outlet">
            <div
                style={{
                    alignItems: 'left',
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '1rem',
                    justifyContent: 'space-evenly',
                    width: '98%'
                }}
            >
                <div>
                    {' '}
                    <h3>Good Morning Ejiro</h3>
                    <p>It's a productive day</p>
                </div>

                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        backgroundColor: '#0D9B48',
                        width: '20%',
                        height: '43px',
                        // paddingTop: "1rem",
                        // paddingBottom: "1rem",
                        marginBottom: '1rem',
                        color: '#fff',
                        '&:hover': { backgroundColor: '#FFF', color: '#0d9b48' }
                    }}
                >
                    Update
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        backgroundColor: '#0D9B48',
                        width: '20%',
                        height: '43px',
                        // paddingTop: "1rem",
                        // paddingBottom: "1rem",
                        marginBottom: '1rem',
                        color: '#fff',
                        '&:hover': { backgroundColor: '#FFF', color: '#0d9b48' }
                    }}
                >
                    Add Program
                </Button>
            </div>

            <div className="outlet-cards"></div>
            <div className="empty-outlet-filter">
                <div>
                    <div>
                        <div style={{ marginLeft: '5px', fontSize: '16px', fontWeight: 'bold' }}>Program</div>
                        <p style={{ fontSize: '16px' }}>Keep good track of all your program</p>
                    </div>
                    <ToggleButtonGroup color="success" value={alignment} exclusive onChange={handleChange} aria-label="Platform">
                        <Button
                            onClick={() => setStatus('completeProfile')}
                            sx={{
                                width: '3rem',
                                fontWeight: 900,
                                fontFamily: 'IBM Plex Sans',
                                textTransform: 'capitalize',
                                border: 'none',
                                '&:hover': {
                                    color: '#0D9B48',
                                    backgroundColor: '#E7F7ED'
                                }
                            }}
                        >
                            All
                        </Button>
                        <Button
                            onClick={() => setStatus('addPartners')}
                            sx={{
                                width: '6rem',
                                fontWeight: 900,
                                fontFamily: 'IBM Plex Sans',
                                textTransform: 'capitalize',
                                border: 'none',
                                '&:hover': {
                                    color: '#0D9B48',
                                    backgroundColor: '#E7F7ED'
                                }
                            }}
                        >
                            Part Time
                        </Button>
                        <Button
                            onClick={() => setStatus('addPartners')}
                            sx={{
                                width: '5rem',
                                fontWeight: 900,
                                fontFamily: 'IBM Plex Sans',
                                textTransform: 'capitalize',
                                border: 'none',
                                '&:hover': {
                                    color: '#0D9B48',
                                    backgroundColor: '#E7F7ED'
                                }
                            }}
                        >
                            full Time
                        </Button>
                        <Button
                            onClick={() => setStatus('addPartners')}
                            sx={{
                                width: '5rem',
                                fontWeight: 900,
                                fontFamily: 'IBM Plex Sans',
                                textTransform: 'capitalize',
                                border: 'none',
                                '&:hover': {
                                    color: '#0D9B48',
                                    backgroundColor: '#E7F7ED'
                                }
                            }}
                        >
                            Online
                        </Button>
                        <Button
                            onClick={() => setStatus('addPartners')}
                            sx={{
                                width: '5rem',
                                fontWeight: 900,
                                fontFamily: 'IBM Plex Sans',
                                textTransform: 'capitalize',
                                border: 'none',
                                '&:hover': {
                                    color: '#0D9B48',
                                    backgroundColor: '#E7F7ED'
                                }
                            }}
                        >
                            Onsite
                        </Button>
                    </ToggleButtonGroup>
                    <div></div>
                </div>
                <div>
                    <input style={{ fontSize: '14px', marginTop: '20px', width: '15rem' }} placeholder="Search program" />
                </div>
            </div>

            <div className="empty-table-outlet">
                <div style={{ width: '57%' }}>
                    <div className="table-header">
                        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Programme Name</div>
                        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Cohort </div>
                        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Programme Mode</div>
                        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Delivery Type</div>
                        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Duration</div>
                        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>More</div>
                    </div>
                    <div className="table-cell"></div>
                </div>
                <div className="approved-programme-cell">
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Trainee;
