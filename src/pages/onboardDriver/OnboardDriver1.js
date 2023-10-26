import React from 'react';
import { Box, Typography } from '@mui/material';

const OnboardDriver1 = ({ formData, setFormData }) => {
    return (
        <>
            <Box sx={{ height: '5rem' }}>
                <Typography>Company’s Email</Typography>
                <input
                    placeholder="johndoe@companyemail.com"
                    value={formData.companyEmail}
                    onChange={(event) => {
                        setFormData({ ...formData, companyEmail: event.target.value });
                    }}
                />
            </Box>
            <Box sx={{ height: '5rem' }}>
                <Typography>Vehicle Number</Typography>
                <input
                    placeholder=""
                    value={formData.vehicleNumber}
                    onChange={(event) => {
                        setFormData({ ...formData, vehicleNumber: event.target.value });
                    }}
                />
            </Box>
        </>
    );
};

export default OnboardDriver1;
