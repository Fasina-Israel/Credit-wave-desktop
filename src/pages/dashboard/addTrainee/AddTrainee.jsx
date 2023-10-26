import React, { useState } from 'react';
import './AddTrainee.css';
import emptyLogo from './../../../../assets/empty-logo.svg';
import { Button } from '@mui/material';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux'


const AddTrainee = () => {
    const navigate = useNavigate();
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
    const auth = JSON.parse(window.sessionStorage.getItem('auth'));
    console.log('auth', auth)
    const { userDetails: select } = useSelector((state) => state.learnSpace);
    console.log('selector admin: ', select);

    const myRole = select?.details?.profile?.data?.role;
    console.log('role here is: ', myRole);

   
    return (
        <section className="section">
            <div className="addTrainee-container">
                <div className="trainee-form-header">
                    <h3>Add Trainee to Cohort</h3>
                    <p>Provide Trainees detailsbkko</p>
                </div>
                <div className="trainee-form-details">
                    <div className="cohort-input">
                        <div className="institute-name">
                            <p style={{ color: 'black' }}>Cohort Name</p>
                            <input style={{ width: '20%' }} id="cohortName" type="text" name="cohortName" placeholder="Dunamis" />
                        </div>
                    </div>
                    <div className="trainee-input-section">
                        <div className="trainee-input">
                            <p style={{ color: 'black' }}>First Name</p>
                            {trainee.map((item, index) => (
                                <input key={item}
                                style={{ width: '15rem', height: '3rem' }}
                                    className="input-field"
                                    type="text"
                                    placeholder="Blessing"
                                    value={location.state ? trainee[index].firstName : null}
                                    onChange={(e) => handleChange(index, 'firstName', e.target.value)}
                                />
                            ))}
                        </div>
                        <div className="trainee-input">
                            <p style={{ color: 'black' }}>Surname</p>
                            {trainee.map((item, index) => (
                                <input key={item}
                                style={{ width: '15rem', height: '3rem' }}
                                    className="input-field"
                                    type="text"
                                    placeholder="Asuilehmen"
                                    value={location.state ? trainee[index].surname : null}
                                    onChange={(e) => handleChange(index, 'surname', e.target.value)}
                                />
                            ))} </div>
                        <div className="trainee-input">
                            <p style={{ color: 'black' }}>Email</p>
                            {trainee.map((item, index) => (
                                <input
                                style={{ width: '15rem', height: '3rem' }}
                                    key={item}
                                    type="email"
                                    placeholder="abcd12@example.com"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                    value={location.state ? trainee[index].email : null}
                                    onChange={(e) => handleChange(index, 'email', e.target.value)}
                                    required
                                />
                            ))}</div>
                        <div className="trainee-input">
                            <p style={{ color: 'black' }}>Initial Deposit</p>
                            {trainee.map((item, index) => (
                                <input key={item}
                                style={{ width: '15rem', height: '3rem' }}
                                    className="input-field"
                                    type="number"
                                    placeholder="Initial deposit"
                                    value={location.state ? trainee[index].initialDeposit : null}
                                    onChange={(e) => handleChange(index, 'initialDeposit', e.target.value)}
                                />
                            ))} </div>
                        <div className="trainee-input">
                            <p style={{ color: 'black' }}>Amount Requested</p>
                            {trainee.map((item, index) => (
                                <input key={item}
                                style={{ width: '15rem', height: '3rem' }}
                                    className="input-field"
                                    type="number"
                                    placeholder="Amount requested"
                                    value={location.state ? trainee[index].amountRequested : null}
                                    onChange={(e) => handleChange(index, 'amountRequested', e.target.value)}
                                />
                            ))}</div>
                    </div>

                    <p style={{ color: 'black' }}>Role</p>
                    {trainee.map((item, index) => (
                        <select
                            key={item}
                            type="text"
                            value={location.state ? trainee[index].role : ''}
                            onChange={(e) => handleChange(index, 'role', e.target.value)}
                            required
                            style={{ height: '40px', width: '300px', borderColor: '#fff', borderRadius: '5px' }}
                        >
                            <option value="">Select role</option>
                            {myRole == 'TRAINEE' ? (
                                <>
                                    <option value="LEARNSPACE_OPERATIONS_MANAGER">LEARNSPACE_OPERATIONS_MANAGER</option>
                                    <option value="TRAINEE">LEARNSPACE_PORTFOLIO_MANAGER</option>
                                </>
                            ) : (
                                <>
                                    <option value="TRAINING_INSTITUTE_ADMIN">TRAINING INSTITUTE ADMIN</option>
                                    <option value="TRAINEE">FINANCE MANAGER</option>
                                </>
                            )}
                        </select>
                    ))}
                </div>

                <div className="add-button">
                    <button
                        style={{
                            backgroundColor: 'aquamarine',
                            width: '77px',
                            padding: '10px',
                            color: 'rgba(0, 0, 0, 0.5)',
                            marginLeft: '93%',
                            marginTop: '-50px',
                            cursor: 'pointer'
                        }}
                        disabled={
                            !trainee[trainee.length - 1].firstName ||
                            !trainee[trainee.length - 1].surname ||
                            !trainee[trainee.length - 1].email ||
                            !trainee[trainee.length - 1].initialDeposit ||
                            !trainee[trainee.length - 1].amountRequested
                        }
                        onClick={handleRegisterTrainee}
                    >
                        + Add More
                    </button>
                </div>
            </div>
            <div className="contact-button">
                <Button
                    // onClick={() => {
                    //     navigate('/dashboard/complete');
                    // }}
                    sx={{
                        marginLeft: '50rem',
                        width: '15rem',
                        fontWeight: 900,
                        fontFamily: 'IBM Plex Sans',
                        textTransform: 'capitalize',
                        border: 'none',
                        backgroundColor: '#FFF',
                        color: '#0EAA4F',
                        outline: '#0EAA4F solid 1px',
                        '&:hover': {
                            color: '#FFF',
                            backgroundColor: '#0EAA4F',
                            outline: '#0EAA4F solid 1px'
                        }
                    }}
                >
                    Back
                </Button>
                <Button
                    onClick={() => {
                        navigate('/preview_trainee', {
                            state: trainee.filter((e) => e.firstName && e.surname && e.initialDeposit && e.amountRequested)
                        });
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
                            color: '#0EAA4F',
                            backgroundColor: '#fff',
                            outline: '#0EAA4F solid 1px'
                        }
                    }}
                >
                    Preview
                </Button>
            </div>
        </section >
    );
};

export default AddTrainee;
