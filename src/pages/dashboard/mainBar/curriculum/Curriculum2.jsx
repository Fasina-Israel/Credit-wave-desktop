import React, { useState, useContext } from 'react';
import './Curriculum2.css';
import ArrowDown from '../../../../../assets/ArrowDown.svg';
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Country, State, City } from 'country-state-city';
import { useSelector } from 'react-redux';
import { getInsituteUrl, createCurriculum } from 'utils/api';
import { Formik, Field, Form } from 'formik';
import nigerianStateLga from 'utils/lga/nigerianStateLga';
import { useEffect } from 'react';
import Curriculum3 from './Curriculum3';
import { CurriculumContext } from '../outlet/UpdateProfile';


const Curriculum2 = ({ values }) => {
    const { updateForm, initialFormValue } = useContext(CurriculumContext);
    console.log(initialFormValue, 'initialFormValue2')

    const navigate = useNavigate();

    const [locationValue, setLocationValue] = useState({});
    const [completeValue, setCompleteValue] = useState();
    const [isVisible, setVisible] = useState(true);
    const { userDetails: select } = useSelector((state) => state.learnSpace);
    const { userDetails: selector } = useSelector((state) => state.learnSpace);
    const getInitialState = () => {
        const value = "";
        return value;
    };
    const handleCertificationChange = (e) => {
        setValue(e.target.value);
    };
    const [value, setValue] = useState(getInitialState)

    const currentYear = new Date().getFullYear();
    const minYear = currentYear - 30;
    const maxYear = currentYear;


    const yearOptions = Array.from({ length: 31 }, (_, index) => ({
        label: String(maxYear - index),
        value: String(maxYear - index)
    })).filter(({ value }) => value >= minYear && value <= maxYear);

    const { courseOfferedSince,
        courseAccreditingOrganisation,
        courseCertificateIssued } = initialFormValue.step2 || {}

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    // console.log("complete value ", completeValue)
    return (
        <div className="curriculum-profile-container">
            <Formik
                initialValues={{
                    courseOfferedSince: courseOfferedSince ?? '',
                    courseCertificateIssued: courseCertificateIssued ?? '',
                    courseAccreditingOrganisation: courseAccreditingOrganisation ?? '',
                }}
                onSubmit={async (values, { setSubmitting }) => {

                    updateForm({ ...initialFormValue, step2: values, currentStep: 'step3' })
                    console.log('initialForm2', initialFormValue);
                    // setInitialForm(values);
                    // setVisible(false);
                    // setSubmitting(false);
                }}>

                {({ isValid, dirty, values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <>

                        <Form onSubmit={handleSubmit}>
                            <div className="company-form" style={{ marginTop: '5rem' }}>
                                <div className="input-section">
                                    <div className="first-section-2">
                                        <div className="curriculum-company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>Course Offered Since</p>
                                            <select className='year-select ' placeholder='Select Year' style={{outlineStyle: 'none'}}>
                                                <option value="" disabled selected hidden >Select a year</option>
                                                {yearOptions.map((option) => (
                                                    <option key={option.value} value={option.value} className='year-select-each'>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="curriculum-company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>Certification</p>
                                            <select placeholder='Do you offer certification for this program?' className='year-select ' style={{ width: ' 23rem' }} onChange={handleCertificationChange}>
                                                <option value="" disabled selected hidden>Select Type of Certificate Issued</option>
                                                <option value="Self-Issued Certificate" className='year-select-each'>Self-Issued Certificate</option>
                                                <option value="Partner issued certificate" className='year-select-each'>Partner issued certificate</option>
                                                <option value="Jointly issued certificate with partner" className='year-select-each'>Jointly issued certificate with partner</option>
                                                <option value="Self and Partner issued certificates" className='year-select-each'>Self and Partner issued certificates</option>
                                            </select>
                                        </div>
                                        <div className="curriculum-company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>Accrediting Organisation or Authority</p>
                                            <Field
                                                style={{ fontSize: '14px', paddingLeft: '20px' }}
                                                className="company-input-field"
                                                id="courseAccreditingOrganisation"
                                                type="text"
                                                name="courseAccreditingOrganisation"
                                                placeholder="Enter name of Accrediting Organisation"
                                                value={values.courseAccreditingOrganisation}
                                                onChange={handleChange}
                                            />
                                        </div>

                                    </div>
                                    <div className="second-section">
                                        <div className="curriculum-company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>Certificate Issued</p>
                                            <select className='year-select ' style={{ width: ' 23rem' }}>
                                                <option value="" disabled selected hidden>Do you offer certification for this program ?</option>
                                                <option value="Yes" className='year-select-each'>Yes</option>
                                                <option value="No" className='year-select-each'>No</option>
                                            </select>

                                        </div>

                                        <div className="curriculum-company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>Accreditation</p>
                                            <select className='year-select' style={{ width: ' 23rem' }}>
                                                <option value="" disabled selected hidden>Is this Course accredited ?</option>
                                                <option value="Yes" className='year-select-each'>Yes</option>
                                                <option value="No" className='year-select-each'>No</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>

                                <div style={{ height: '60px', justifyContent: 'flex-end', display: 'flex', gap: '5px', marginLeft: '30%', width: '78.7%' }}>

                                    <Button
                                        // type="submit"
                                        onClick={() => {
                                            console.log('initialFormPrev', initialFormValue);
                                            updateForm({ ...initialFormValue, step2: values, currentStep: 'step1' })
                                        }
                                        }
                                        sx={{
                                            width: '10rem',
                                            fontWeight: 900,
                                            fontFamily: 'IBM Plex Sans',
                                            textTransform: 'capitalize',
                                            border: 'none',
                                            backgroundColor: '#0EAA4F',
                                            marginRight: '3rem',
                                            color: '#fff',
                                            '&:hover': {
                                                backgroundColor: '#0EAA4F',
                                                color: '#fff',
                                            }
                                        }}
                                    >
                                        Previous
                                    </Button>
                                    <Button
                                        type="submit"
                                        onClick={() => {
                                        }}
                                        sx={{
                                            width: '15rem',
                                            fontWeight: 900,
                                            fontFamily: 'IBM Plex Sans',
                                            textTransform: 'capitalize',
                                            border: 'none',
                                            backgroundColor: '#0EAA4F',
                                            marginRight: '3rem',
                                            color: '#fff',
                                            '&:hover': {
                                            backgroundColor: '#0EAA4F',
                                            color: '#fff',
                                            }
                                        }}
                                    >
                                        Save and Continue
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </>)}
            </Formik>
        </div >
    );
};

export default Curriculum2;


