import React from 'react';
import logo from './../../../../assets/ContainerLogo.svg';
import emptyProfile from './../../../../assets/EmptyProfile.svg';
import completeIcon from '../../../../assets/completeIcon.svg';
import Button from '@mui/material/Button';
import globe from '../../../../assets/globe.svg';
import { useNavigate } from 'react-router-dom';
import emptyLogo from '../../../../assets/empty-logo.svg';
import Modal from '@mui/material/Modal';
import '../../completeRegistration/CompleteRegistration.css';
import CloseIcon from '../../../../assets/CloseIcon.svg';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
// import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import CompleteRegistration from '../../completeRegistration/CompleteRegistration';
import ring from '../../../../assets/ring.svg';


function CircularProgressWithLabel(props) {

    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: -800,
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

CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     * @default 0
     */
    value: PropTypes.number.isRequired
};

const Complete = () => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleUpdateProfile = () => {
        navigate('/admin/settings');
    }

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

    const { userDetails: select } = useSelector((state) => state.learnSpace);
    console.log(select);

    const instituteName = select?.details?.profile?.data[1]?.instituteName
    // console.log("institute name is ", instituteName)

    const userObject = JSON.parse(window.sessionStorage.getItem('profile'));
    console.log(userObject, 'userobject');
    const auth = JSON.parse(window.sessionStorage.getItem('auth'));
    // console.log(auth, 'auth');
    const id = auth.profile.data[1].id;
    console.log(id)

    // const dance = useSelector((state) => state.userDetails)
    // console.log(dance)


    const firstName = auth?.profile?.data[0]?.firstName

    const authToken = auth?.token
    // console.log(authToken);

    const role = select?.details?.profile?.data[0]?.role
    console.log("first role is: ", role)


    return (
        <div className="outlet">
            <div
                style={{
                    height: '90vh',
                    // alignItems: 'left',
                    display: 'flex',
                    // flexDirection: 'row',
                    marginTop: '6rem',
                    marginLeft: '3rem',
                    width: '98%',
                    columnGap: '50px',
                    backgroundColor: '#F0F1F1'
                }}
            >
                <div>
                    <h3 style={{ marginBottom: '20px' }}>{`${greet} ${firstName}`}</h3>
                    <p style={{ marginTop: '15px', color: 'black' }}>It's a productive day</p>
                </div>

                <div className="" style={{ columnGap: '15px', display: 'flex', marginTop: '15px' }}>
                    {/* <CircularProgressWithLabel value={20} style={{ height: '20px', position: 'relative', marginTop: '20px' }} /> */}
                    <img src={ring} alt="ring" style={{ width: '40px', height: '40px' }} />
                    <div style={{ marginTop: '10px', marginLeft: '20px', width: '20rem', display: 'flex', flexDirection: 'row', marginTop: '10px' }}><div style={{ fontWeight: 'bold' }}>{`${instituteName}'s \u00A0 `}</div> registration is incomplete</div>

                    <button onClick={handleUpdateProfile}
                        style={{
                            width: '124px',
                            marginTop: '0px',
                            backgroundColor: '#0D9B48',
                            height: '50px',
                            outline: 'none',
                            border: 'green',
                            color: 'white',
                            borderRadius: '5px',
                            textAlign: 'center',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer'
                        }}>
                        Update
                    </button>

                </div>
            </div>
            <div>

            </div>
        </div >
    );
};

export default Complete;
