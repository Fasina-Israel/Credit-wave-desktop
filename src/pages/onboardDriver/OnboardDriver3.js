import React from 'react';
import { Box, Typography } from '@mui/material';

const OnboardDriver3 = ({ formData, setFormData }) => {
    return (
        <>
            <Box sx={{ height: '5rem' }}>
                <Typography>License Plate Number</Typography>
                <input placeholder="johndoe@companyemail.com" />
            </Box>
            <Box sx={{ height: '5rem' }}>
                <Typography>Vehicle Registration Number</Typography>
                <input placeholder="" />
            </Box>
            <Box sx={{ height: '5rem' }}>
                <Typography>Vehicle Insurance/Policy Number</Typography>
                <input placeholder="" />
            </Box>
        </>
    );
};

export default OnboardDriver3;
