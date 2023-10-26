import '../previewTrainee/PreviewTrainee.css';
import { FiX, FiPlus } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import { Select } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineArrowDown } from 'react-icons/ai';

const AddTrainee2 = () => {
    const location = useLocation();
    const [trainees, setTrainees] = useState([{}]);

    let handleAddTrainee = (event) => {
        event.preventDefault();
        setTrainees([...trainees, {}]);
        // setTraineeCount(traineeCount + 1);
    };

    const handleChange = (index, key, value) => {
        const traineeData = [...trainees];
        traineeData[index] = { ...traineeData[index], [key]: value };
        setTrainees([...traineeData]);
    };
    const { programId } = useParams();
    console.log('program id ', programId);
    const { cohortId } = useParams();
    const programName = location?.state?.programName;
    const cohortName = location?.state?.cohortName;

    const navigate = useNavigate();

    const formatNumberWithCommas = (number) => {
        if (typeof number === 'number' && !isNaN(number)) {
            return number.toString().replace(/\B(?=(\d{9})+(?!\d))/g, ',');
        }
        return '0';
    };

    useEffect(() => {
        sessionStorage.getItem('trainees') && setTrainees([...JSON.parse(sessionStorage.getItem('trainees'))]);
    }, []);

    return (
        <div style={{ width: '90vw', padding: '3rem' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div className="trainee-form-header">
                    <p style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '-10px' }}>Add Trainee to {cohortName}</p>
                    <p style={{ fontSize: '16px', fontWeight: '500' }}>Provide Trainees details</p>
                </div>
                <div style={{ width: '30px', height: '30px', cursor: 'pointer' }}>
                    <FiX
                        size={20}
                        onClick={() => navigate(`/admin/programme/${programId}/cohort/${programName}/${cohortId}/trainee`)}
                    ></FiX>
                </div>
            </div>
            <div>
                <div className="trainee-input">
                    <p style={{ marginBottom: '-10px' }}>Cohort Name</p>
                    <p
                        style={{
                            fontWeight: '500',
                            fontSize: '14px',
                            width: '100%',
                            marginBottom: '-5px',
                            height: '20px',
                            border: '1px solid lightsteelblue',
                            borderRadius: '2px',
                            padding: '14px'
                        }}
                    >
                        {cohortName}
                    </p>
                </div>
            </div>
            <div className="trainee-input section">
                <div
                    style={{
                        maxHeight: '60vh',
                        width: '90vw',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: '1rem'
                    }}
                >
                    <div className="trainee-input">
                        <p style={{ fontWeight: '500', fontSize: '14px' }}>First Name</p>
                        {trainees.map((item, index) => (
                            <input
                                style={{ width: '15rem', height: '3rem' }}
                                key={item}
                                type="text"
                                value={trainees[index]?.firstName}
                                onChange={(e) => handleChange(index, 'firstName', e.target.value)}
                            />
                        ))}
                    </div>
                    <div className="trainee-input">
                        <p style={{ fontWeight: '500', fontSize: '14px' }}>Surname</p>
                        {trainees.map((item, index) => (
                            <input
                                style={{ width: '15rem', height: '3rem' }}
                                key={item}
                                type="text"
                                value={trainees[index]?.surname}
                                onChange={(e) => handleChange(index, 'surname', e.target.value)}
                            />
                        ))}
                    </div>
                    <div className="trainee-input">
                        <p style={{ fontWeight: '500', fontSize: '14px' }}>Email</p>
                        {trainees.map((item, index) => (
                            <input
                                style={{ width: '15rem', height: '3rem' }}
                                key={item}
                                type="email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                value={trainees[index].email}
                                onChange={(e) => handleChange(index, 'email', e.target.value)}
                                required
                            />
                        ))}
                    </div>
                    <div className="trainee-input">
                        <p style={{ fontWeight: '500', fontSize: '14px' }}>Initial Deposit</p>
                        {trainees.map((item, index) => (
                            <input
                                style={{ width: '15rem', height: '3rem' }}
                                key={item}
                                type="text"
                                placeholder="0"
                                value={formatNumberWithCommas(trainees[index].initialDeposit)}
                                onChange={(e) => handleChange(index, 'initialDeposit', parseInt(e.target.value.replace(/,/g, '')))}
                            />
                        ))}
                    </div>
                    <div className="trainee-input">
                        <p style={{ fontWeight: '500', fontSize: '14px' }}>Amount Requested</p>
                        {trainees.map((item, index) => (
                            <input
                                style={{ width: '15rem', height: '3rem' }}
                                key={item}
                                type="text"
                                placeholder="0"
                                value={formatNumberWithCommas(trainees[index].amountRequested)}
                                onChange={(e) => handleChange(index, 'amountRequested', parseInt(e.target.value.replace(/,/g, '')))}
                            />
                        ))}
                        <span
                            style={{
                                marginTop: '-53px',
                                marginLeft: '215px'
                            }}
                        >
                            <AiOutlineArrowDown />
                        </span>
                    </div>
                    <span
                        style={{
                            marginTop: '60px',
                            marginLeft: '10px',
                            fontSize: '24px'
                        }}
                    >
                        <RiDeleteBinLine />
                    </span>
                </div>
            </div>
            <div style={{ justifyContent: 'right', display: 'flex' }}>
                <button
                    disabled={
                        !trainees[trainees.length - 1]?.firstName ||
                        !trainees[trainees.length - 1]?.surname ||
                        !trainees[trainees.length - 1]?.email ||
                        !trainees[trainees.length - 1]?.initialDeposit ||
                        !trainees[trainees.length - 1]?.amountRequested
                    }
                    onClick={handleAddTrainee}
                >
                    <div>
                        <FiPlus color="black" size={9} strokeWidth="3px"></FiPlus>
                    </div>
                    Add more
                </button>
            </div>
            <div className="refer-colleague-footer" style={{ justifyContent: 'right', display: 'flex', marginTop: '5rem' }}>
                <div className="group-link"></div>
                <div className="buttons">
                    <button id="back" onClick={() => navigate(`/admin/programme/${programId}/cohort/${programName}/${cohortId}/trainee`)}>
                        Back
                    </button>
                    <button
                        id="preview"
                        onClick={() => {
                            sessionStorage.setItem('trainees', JSON.stringify(trainees));
                            navigate('/preview_trainee_page/' + programId, {
                                state: {
                                    ids: cohortId,
                                    cohortName: cohortName
                                }
                            });
                        }}
                    >
                        Preview
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddTrainee2;
