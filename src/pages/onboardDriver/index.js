import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import '../../components/content/Styles.css';
import { Box, Button, Grid, Typography } from '@mui/material';
import ContentImage from '../../assets/image/ContentImage.svg';
import { Audio } from 'react-loader-spinner';
import OnboardDriver1 from './OnboardDriver1';
import OnboardDriver2 from './OnboardDriver2';
import OnboardDriver3 from './OnboardDriver3';

const OnboardDriver = () => {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        companyEmail: '',
        vehicleNumber: '',
        vehicle: '',
        vehicleYear: '',
        vehicleCapability: '',
        licensePlateNumber: '',
        vehicleRegistration: '',
        vehicleInsurance: ''
    });
    const pageDisplay = () => {
        if (page === 0) {
            return (
                <>
                    <OnboardDriver1 formData={formData} setFormData={setFormData} />
                </>
            );
        } else if (page === 1) {
            return (
                <>
                    <OnboardDriver2 />
                </>
            );
        } else if (page === 2) {
            return <OnboardDriver3 />;
        }
    };
    return (
        <>
            <Navbar />
            <Box
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    height: '100vh',
                    width: '100%',
                    flexDirection: 'column'
                }}
            >
                <Box
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        height: '55%',
                        width: '70%',
                        flexDirection: 'column',
                        gap: '2rem'
                    }}
                >
                    <Grid>
                        <Typography>Company’s Information and Vehicle Details</Typography>
                    </Grid>
                    <Grid>{pageDisplay()}</Grid>
                    <Grid>
                        <Button
                            onClick={() => {
                                setPage((currentPage) => currentPage + 1);
                            }}
                            type="submit"
                            variant="contained"
                            // disabled={!isValid || !dirty}
                            sx={{
                                backgroundColor: '#26d',
                                paddingLeft: '10rem',
                                paddingRight: '10rem',
                                paddingTop: '0.5rem',
                                paddingBottom: '0.5rem',
                                borderRadius: '2rem',
                                width: '100%',
                                '&:hover': { backgroundColor: '#26d', outline: 'white' },
                                '&.Mui-disabled': {
                                    background: '#90D8AE'
                                }
                            }}
                        >
                            {loading && <Audio type="TailSpin" color="#FFF" height={20} width={20} />}
                            {!loading && (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Typography
                                        mr="1rem"
                                        sx={{
                                            fontWeight: 500,
                                            fontSize: '14px',
                                            color: '#FFF',
                                            textTransform: 'capitalize',
                                            fontFamily: 'IBM Plex Sans',
                                            fontStyle: 'normal'
                                        }}
                                    >
                                        Next
                                    </Typography>
                                </Box>
                            )}
                        </Button>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};
export default OnboardDriver;
