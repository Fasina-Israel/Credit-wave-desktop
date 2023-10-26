import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './../../../../../assets/ContainerLogo.svg';
import emptyProfile from './../../../../../assets/EmptyProfile.svg';
import { ToggleButtonGroup, Button, Modal } from '@mui/material';
import SearchIcon from '../../../../../assets/searchIcon.svg';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TableRow from '@mui/material/TableRow';
import suitcase from '../../../../../assets/suitcase.svg';
import { width } from '@mui/system';
import Card from '@mui/material/Card';
import '../../../../Admin-create-program/createProgramDashboard/components/styles/FirstCardSection.css';

const columns = [
    { id: 'name', label: 'Program Name', minWidth: 100 },
    { id: 'programType', label: 'Cohort', minWidth: 100 },
    {
        id: 'duration',
        label: 'Program Mode',
        minWidth: 100,
        format: (value) => value.toLocaleString('en-US')
    },
    {
        id: 'status',
        label: 'Delivery Type',
        minWidth: 100,
        format: (value) => value.toLocaleString('en-US')
    },
    {
        id: 'programMode',
        label: 'Duration',
        minWidth: 100,
        format: (value) => value.toFixed(2)
    }
];

const Trainee = () => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const date = new Date();
    const hours = date.getHours();
    let greet;

    if (hours < 12) {
        greet = 'Good Morning';
    } else if (hours < 18) {
        greet = 'Good Afternoon';
    } else {
        greet = 'Good Evening';
    }

    const userObject = JSON.parse(window.sessionStorage.getItem('profile'));
    // console.log(userObject, 'userobject');
    const auth = JSON.parse(window.sessionStorage.getItem('auth'));
    // console.log(auth, 'auth');
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
                    justifyContent: 'space-between',
                    width: '91%'
                }}
            >
                <div>
                    {' '}
                    <h3>{`${greet} ${userObject?.data[0]?.firstName}`}</h3>
                    <p style={{ marginTop: '-3px' }}>It's a productive day</p>
                </div>
                {/* <Button
                    onClick={() => {
                        navigate('/2fa');
                    }}
                    type="submit"
                    variant="contained"
                    sx={{
                        backgroundColor: '#0D9B48',
                        width: '15%',
                        fontWeight: '600',
                        height: '43px',
                        marginBottom: '1rem',
                        color: '#fff',
                        '&:hover': { backgroundColor: '#0D9B48', color: '#fff' }
                    }}
                >
                    Setup 2FA
                </Button> */}
                <Link to="" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
                    <button className="trainee-addProgram-btn" style={{ background: '#90D8AE' }}>
                        Add Program
                    </button>
                </Link>
            </div>

            <div className="outlet-cards" style={{ marginTop: '30px' }}>
                <div style={{ width: '18%', background: '#fff', boxShadow: 'black', borderRadius: '5px', height: '10rem' }}></div>
                <div style={{ width: '18%', background: '#fff', boxShadow: 'black', borderRadius: '5px', height: '10rem' }}></div>
                <div style={{ width: '18%', background: '#fff', boxShadow: 'black', borderRadius: '5px', height: '10rem' }}></div>
                <div style={{ width: '18%', background: '#fff', boxShadow: 'black', borderRadius: '5px', height: '10rem' }}></div>
                <div style={{ width: '18%', background: '#fff', boxShadow: 'black', borderRadius: '5px', height: '10rem' }}></div>
            </div>

            <div className="thirdCard-wrapper" style={{ width: '91.5%' }}>
                <div className="thirdCard-bg">
                    <div className="program-search">
                        <div>
                            <p className="thirdCard-header">Program</p>
                            <p className="thirdCard-sub">Keep good track of all program</p>
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name=""
                                id=""
                                aria-describedby="helpId"
                                placeholder="Search Program"
                            />
                            <span className="search-icon" style={{}}>
                                <BsSearch />
                            </span>
                        </div>
                    </div>
                    <div className="select-program">
                        <ToggleButtonGroup color="success" value={alignment} exclusive onChange={handleChange} aria-label="Platform">
                            <Button
                                onClick={() => setStatus('allCohort')}
                                sx={{
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
                                onClick={() => setStatus('approved')}
                                sx={{
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
                                Part-time
                            </Button>
                            <Button
                                onClick={() => setStatus('rejected')}
                                sx={{
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
                                Full-time
                            </Button>
                            <Button
                                onClick={() => setStatus('pending')}
                                sx={{
                                    fontWeight: 900,
                                    fontFamily: 'IBM Plex Sans',
                                    border: 'none',
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        color: '#0D9B48',
                                        backgroundColor: '#E7F7ED'
                                    }
                                }}
                            >
                                Online
                            </Button>

                            <Button
                                onClick={() => setStatus('pending')}
                                sx={{
                                    fontWeight: 900,
                                    fontFamily: 'IBM Plex Sans',
                                    border: 'none',
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        color: '#0D9B48',
                                        backgroundColor: '#E7F7ED'
                                    }
                                }}
                            >
                                Onsite
                            </Button>
                        </ToggleButtonGroup>
                    </div>
                </div>
            </div>
            <div
                className="trainee-table-wrapper"
                style={{ display: 'flex', columnGap: '9px', width: '91%', margin: 'auto', marginBottom: '40px' }}
            >
                <Paper className="table-paper" sx={{ width: '80%', height: '100%', marginTop: '25px' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
                                            {column.label}
                                        </TableCell>
                                    ))}
                                    <TableCell>More</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <img style={{ position: 'relative', left: '115%', marginTop: '30px' }} src={suitcase} alt="" />
                                <div style={{ marginLeft: '100%', marginTop: '16px', width: 'max-content', textAlign: 'center' }}>
                                    <p style={{ fontWeight: '500', fontSize: '18px' }}>No Program Yet</p>
                                    <p style={{ fontWeight: '400', fontSize: '16px' }}>Details about your program will appear here</p>
                                    <Link to="">
                                        <p style={{ color: '#B4E5C8', fontWeight: '700' }}>Add program</p>
                                    </Link>
                                </div>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div>
                        <div
                            className="tableButtons"
                            style={{ display: 'flex', justifyContent: 'space-between', width: '95%', margin: '0 auto' }}
                        >
                            <button className="tableButton">
                                <span style={{
                                    marginLeft: '-3px'
                                }}>&larr; </span>
                                Previous
                            </button>

                            <Stack sx={{ padding: '30px', fontFamily: 'Inter' }} spacing={2}>
                                <Pagination count={10} color="success" />
                            </Stack>

                            <button className="tableButton">
                                Next <span> &rarr;</span>
                            </button>
                        </div>
                    </div>
                </Paper>

                <div className="forthCard-container" style={{ width: '30%', marginTop: '25px' }}>
                    <Card sx={{ height: '490px', padding: '15px' }}>
                        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', paddingBottom: '1%' }}>
                            <div>
                                <p style={{ fontSize: '16x', fontWeight: '500', color: '#000' }}>Recent approved programe </p>
                            </div>
                            <div>
                                <p style={{ color: '#0D9B48', fontWeight: '500', fontSize: '16px', cursor: 'pointer' }}>View All</p>
                            </div>
                        </div>
                        <hr />
                        <div style={{ marginTop: '120px', textAlign: 'center' }}>
                            <p style={{ fontWeight: '500', fontSize: '18px' }}>No Program Yet</p>
                            <p style={{ fontWeight: '400', fontSize: '16px' }}>Details about your program will appear here</p>
                        </div>
                    </Card>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="authLogo"
            >
            </Modal>
        </div>
    );
};

export default Trainee;
