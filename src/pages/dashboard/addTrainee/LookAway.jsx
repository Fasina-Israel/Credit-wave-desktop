import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ToggleButtonGroup, Button, Modal } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Card } from '@material-ui/core';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TableRow from '@mui/material/TableRow';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { green } from '@mui/material/colors';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useSelector } from 'react-redux';
import { GrClose } from 'react-icons/gr';
import { getTraineeByCohort } from 'utils/api';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FiX } from 'react-icons/fi';



const lookaway = () => {
    const location = useLocation();
    const [trainee, setTrainee] = useState(location.state && [...location.state].length > 0 ? [...location.state] : [{}]);
    let handleRegisterTrainee = (event) => {
        event.preventDefault();
        setTrainee([...trainee, {}]);
    };
    const handleChange = (index, key, value) => {
        const traineeData = [...trainee];
        traineeData[index] = { ...traineeData[index], [key]: value };
        setTrainee([...traineeData]);
    };

    const navigate = useNavigate();
    return (
        <div className="refer-trainee-container">
            <div className="refer-trainee-header">
                <div className="page-details">
                    <h2>Refer Trainee</h2>
                    <p>Provide trainees details</p>
                </div>
                <button></button>
            </div>
            <div className="refer-trainee-body">
                <div className="input-container" style={{ overflowX: 'scroll', maxHeight: '60vh' }}>
                    <div>
                        <h5>First Name</h5>
                        {trainee.map((item, index) => (
                            <input
                                key={item}
                                type="text"
                                value={location.state ? trainee[index].firstName : null}
                                onChange={(e) => handleChange(index, 'firstName', e.target.value)}
                            />
                        ))}
                    </div>
                    <div>
                        <h5>Last Name</h5>
                        {trainee.map((item, index) => (
                            <input
                                key={item}
                                type="text"
                                value={location.state ? trainee[index].lastName : null}
                                onChange={(e) => handleChange(index, 'lastName', e.target.value)}
                            />
                        ))}
                    </div>
                    <div>
                        <h5>Email</h5>
                        {trainee.map((item, index) => (
                            <input
                                key={item}
                                type="email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                value={location.state ? trainee[index].email : null}
                                onChange={(e) => handleChange(index, 'email', e.target.value)}
                                required
                            />
                        ))}
                    </div>
                    <div>
                        <h5>Amount Requested</h5>
                        {trainee.map((item, index) => (
                            <input
                                key={item}
                                placeholder="Enter Amount"
                                type="number"
                                value={location.state ? trainee[index].amount : null}
                                onChange={(e) => handleChange(index, 'amount', e.target.value)}
                                required
                            />
                        ))}
                    </div>
                </div>
                <div className="add-more-button">
                    <button
                        disabled={
                            !trainee[trainee.length - 1].firstName ||
                            !trainee[trainee.length - 1].lastName ||
                            !trainee[trainee.length - 1].amount ||
                            !trainee[trainee.length - 1].email
                        }
                        onClick={handleRegisterTrainee}
                    >
                        <div>
                            <FiPlus color="black" size={9} strokeWidth="3px"></FiPlus>
                        </div>
                        Add more
                    </button>
                </div>
            </div>
            <div className="refer-trainee-footer">
                <div className="group-link">
                    <Link style={{ color: '#0d9b48' }}>Refer trainee in group?</Link>
                </div>
                <div className="buttons">
                    <button id="back" onClick={() => navigate('/dashboard_demo')}>
                        Back
                    </button>
                    <button
                        id="preview"
                        onClick={() =>
                            navigate('/reviewReferred_trainee', {
                                state: trainee.filter((e) => e.firstName && e.lastName && e.email && e.amount)
                            })
                        }
                    >
                        Preview
                    </button>
                </div>
            </div>
        </div>
    );
};
export default lookaway;