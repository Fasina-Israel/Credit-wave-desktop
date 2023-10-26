import React from 'react';
import { Box, Typography } from '@mui/material';

const OnboardDriver2 = ({ formData, setFormData }) => {
    return (
        <>
            <Box sx={{ height: '5rem' }}>
                <Typography>Vehicle</Typography>
                <input placeholder="johndoe@companyemail.com" />
            </Box>
            <Box sx={{ height: '5rem' }}>
                <Typography>Vehicle Year</Typography>
                <input placeholder="" />
            </Box>
            <Box sx={{ height: '5rem' }}>
                <Typography>Vehicle Capability</Typography>
                <input placeholder="" />
            </Box>
        </>
    );
};

export default OnboardDriver2;
