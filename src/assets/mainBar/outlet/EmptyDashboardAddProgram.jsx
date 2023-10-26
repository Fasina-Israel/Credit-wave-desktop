import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './../../../../../assets/ContainerLogo.svg';
import emptyProfile from './../../../../../assets/EmptyProfile.svg';
import { ToggleButtonGroup, Button } from '@mui/material';
import SearchIcon from '../../../../../assets/searchIcon.svg';
import { BsSearch } from 'react-icons/bs';
import suitcase from '../../../../../assets/suitcase.svg';
import { Link } from 'react-router-dom';
import axios from './../../../../../axios/instance';
import ring40 from '../../../../../assets/ring40.svg';
import {
    CircularProgress,
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    Pagination,
    Stack,
    TableRow,
    Card,
    Box
} from '@mui/material';
import '../../../../Admin-create-program/createProgramDashboard/components/styles/FirstCardSection.css';
import { useSelector } from 'react-redux';

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

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: -25,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Typography variant="caption" component="div" color="text.secondary">
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

const EmptyDashboardAddProgram = () => {

    let greet;
    const date = new Date();
    const hours = date.getHours();

    if (hours < 12) {
        greet = 'Good Morning';
    } else if (hours < 18) {
        greet = 'Good Afternoon';
    } else {
        greet = 'Good Evening';
    }
    const [progress, setProgress] = useState(10);
    const [status, setStatus] = useState('All');
    const [alignment, setAlignment] = useState('web');
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const navigate = useNavigate();
    const select = useSelector((state) => state.userDetails)

    const userObject = JSON.parse(window.sessionStorage.getItem('profile'));

    const auth = JSON.parse(window.sessionStorage.getItem('auth'));

    const firstName = auth?.profile?.data[0]?.firstName

    const authToken = auth?.token
    return (
        <div className="outlet" style={{ background: '#F0F1F1' }}>
            <div
                style={{
                    alignItems: 'left',
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '6rem',
                    justifyContent: 'space-between',
                    width: '90%',
                    padding: '0rem 2rem'
                }}
            >
                <div>
                    <h3>{`${greet} ${firstName}`}</h3>
                    <p style={{ marginTop: '-3px', color: '#101828' }}>It's a productive day</p>
                </div>
                <div className="" style={{ columnGap: '10px', display: 'flex', marginTop: '20px' }}>
                    {/* <CircularProgressWithLabel value={40} style={{ marginTop: '6px' }} /> */}
                    <img src={ring40} style={{ width: '40px', height: '40px', marginTop: '10px' }} alt="" />
                    <p style={{ color: '#101828', fontWeight: '600' }}>Congratulations! Now add your first program</p>
                    {/* <button className="traineeProgress-btn">Complete</button> */}
                </div>
                <button
                    onClick={() => {
                        navigate('/add_program');
                    }}
                    // className="trainee-addProgram-btn"
                    style={{ background: '#0D9B48', fontWeight: '600', fontFamily: 'IBM Plex Sans', width: '20%', height: '50px', border: 'none', marginTop: '20px', color: 'white', borderRadius: '5px' }}
                >
                    Add Program
                </button>
            </div>

            <div className="outlet-cards" style={{ marginTop: '30px', width: '95%' }}>
                <div style={{ width: '18%', background: '#fff', boxShadow: 'black', borderRadius: '5px', height: '10rem' }}></div>
                <div style={{ width: '18%', background: '#fff', boxShadow: 'black', borderRadius: '5px', height: '10rem' }}></div>
                <div style={{ width: '18%', background: '#fff', boxShadow: 'black', borderRadius: '5px', height: '10rem' }}></div>
                <div style={{ width: '18%', background: '#fff', boxShadow: 'black', borderRadius: '5px', height: '10rem' }}></div>
                <div style={{ width: '18%', background: '#fff', boxShadow: 'black', borderRadius: '5px', height: '10rem' }}></div>
            </div>

            <div className="thirdCard-wrapper" style={{ width: '90%', marginLeft: '40px', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
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
                    <div className="select-program" style={{ marginTop: '0px' }}>
                        <ToggleButtonGroup style={{ width: '40%' }} color="success" value={alignment} exclusive onChange={handleChange} aria-label="Platform">
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
                                    width: '150px',
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
                                    width: '150px',
                                    display: 'flex',
                                    flexDirection: 'row',
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
                style={{ display: 'flex', columnGap: '9px', width: '91%', margin: 'auto 40px', marginBottom: '40px' }}
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
                                <span>&larr; </span>
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
        </div >
    );
};

export default EmptyDashboardAddProgram;
