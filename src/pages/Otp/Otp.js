import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import '../../components/content/Styles.css';
import ContentImage from '../../assets/image/ContentImage.svg';
import { MuiOtpInput } from 'mui-one-time-password-input';
import { Box, Typography } from '@mui/material';
import { Button } from '../../components/button/index';

const Otp = () => {
    // const navigate = useNavigate();
    const [otp, setOtp] = React.useState('');
    // const [loading, setLoading] = useState(false);

    const handleChange = (newValue) => {
        setOtp(newValue);
    };

    return (
        <>
            <Navbar />
            <section className="contentBackground-container">
                <div className="contentBackground-container1">
                    <div className="contentBackgroundImage">
                        <img src={ContentImage} alt="" style={{ height: '33rem' }} />
                    </div>
                </div>
                <div>
                    <Box
                        sx={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2rem',
                            width: '80%'
                        }}
                    >
                        <Box
                            sx={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <Typography sx={{ fontWeight: '600', fontSize: '28px' }}>Verification Code</Typography>
                            <Box sx={{ width: '60%' }}>
                                <Typography sx={{ fontSize: '16px', textAlign: 'center', fontWeight: '400' }}>
                                    A verification code was sent to you email jayde...ye@gmail.com, Kindly input the code below
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                width: '240px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px'
                            }}
                        >
                            <MuiOtpInput
                                value={otp}
                                onChange={handleChange}
                                sx={{
                                    height: '48px',
                                    border: '2px'
                                }}
                            />
                            <Button children={'Verify'} />
                        </Box>
                        <Box>
                            <Typography>Resend Code or</Typography>
                            <Typography>Log out</Typography>
                        </Box>
                    </Box>
                </div>
            </section>
        </>
    );
};

export default Otp;
