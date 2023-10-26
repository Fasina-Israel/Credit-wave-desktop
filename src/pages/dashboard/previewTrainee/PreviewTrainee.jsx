import React from 'react';
import { FiX } from 'react-icons/fi';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onboardTrainee } from '../../../../utils/api';
// import './styles/reviewTraineeReferred.css';
import './PreviewTrainee.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from 'react-loader-spinner';

function ReviewTraineeReferred() {
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [trainees, setTrainees] = useState([{}]);
    // const traineeDetails = Object.values(location.state?.details);
    const { userDetails: select } = useSelector((state) => state.learnSpace);

    const instituteId = select.details.profile.data[1].id;
    const userObject = JSON.parse(window.sessionStorage.getItem('profile'));
    // console.log(userObject, 'userobject');
    const auth = JSON.parse(window.sessionStorage.getItem('auth'));
    // console.log(auth, 'auth');
    const authToken = select?.details?.token;
    console.log('Token ', authToken);

    console.log('institute id ', instituteId);
    const cohortId = location?.state?.ids;
    console.log(cohortId, ' cohort gtr');

    const programId = useParams();
    console.log(programId.id, ' program id');

    const cohortName = location?.state?.cohortName;

    const number = 1234567.89;
    const formattedNumber = number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    useEffect(() => {
        if (!sessionStorage.getItem('trainees')) {
            // navigate('/admin/programme');
        } else {
            setTrainees([...JSON.parse(sessionStorage.getItem('trainees'))]);
        }
    }, []);

    const sendDataToBackend = async () => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`
            },
            body: JSON.stringify({
                basicDataDTOS: trainees,
                foreignKeys: {
                    instituteId,
                    cohortId,
                    programId: programId.id
                }
            })
        };

        try {
            const response = await fetch(onboardTrainee, requestOptions);
            setLoading(true);
            if (response.status === 200) {
                navigate('/trainee_succesfull');
                setLoading(false);
            } else {
                setLoading(false);
            }
            const data = await response.json();
            console.log('Response Data:', data);
        } catch (error) {
            setLoading(false);
            console.log('Error:', error);
        }
    };

    return (
        <div>
            <div style={{ justifyContent: 'space-evenly', display: 'flex', padding: '30px', gap: '70rem' }}>
                <div>
                    <h2>Refer Trainee</h2>
                    <p>Cross-check trainees details</p>
                </div>
                <button
                    style={{ height: '30px', cursor: 'pointer', background: 'transparent', border: 'none' }}
                    onClick={() => navigate(`/add_trainee/${programId}/${cohortId}`)}
                >
                    <FiX size={25}></FiX>
                </button>
            </div>
            <div className="review-trainee-body" style={{ overflowX: 'scroll', maxHeight: '60vh', maxWidth: '87vw' }}>
                <ul className="trainee-details-list" style={{ display: 'flex', flexDirection: 'column' }}>
                    <li
                        style={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'space-between',
                            background: 'grey',
                            borderRadius: '5px',
                            color: 'white'
                        }}
                    >
                        <p>First Name</p>
                        <p>Surname</p>
                        <p>Email</p>
                        <p>Initial Deposit</p>
                        <p>Amount Requested</p>
                    </li>
                    {trainees.map((detail) =>
                        detail.email != undefined && detail.firstName != undefined && detail.surname != undefined ? (
                            <li
                                key={detail.email}
                                style={{
                                    display: 'flex',
                                    width: '100%',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    color: 'black',
                                    height: '60px'
                                }}
                            >
                                <p>{detail.firstName}</p>
                                <p>{detail.surname}</p>
                                <p>{detail.email}</p>
                                <p>{detail.initialDeposit}</p>
                                <p>{detail.amountRequested}</p>
                            </li>
                        ) : null
                    )}
                </ul>
            </div>
            <div className="review-trainee-footer">
                <div className="buttons">
                    <button
                        id="edit"
                        onClick={() =>
                            navigate(`/add_trainee/${programId.id}/${cohortId}`, {
                                state: {
                                    programId: programId.id,
                                    cohortId: cohortId,
                                    cohortName: cohortName
                                }
                            })
                        }
                    >
                        Edit
                    </button>
                    <button id="preview" onClick={sendDataToBackend}>
                        {loading ? <Loader type="TailSpin" color="white" height={20} /> : 'Submit'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ReviewTraineeReferred;
