import React, { useState, useContext } from 'react';
import './Curriculum.css';
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
import Curriculum4 from './Curriculum4';
import { CurriculumContext } from '../outlet/UpdateProfile';


const Curriculum3 = () => {
    const { updateForm, initialFormValue } = useContext(CurriculumContext);
    console.log(initialFormValue, 'initialFormValue2')

    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({});
    const [initialForm, setInitialForm] = useState();
    const [updatedStates, setUpdatedState] = useState([]);
    const [updatedCities, setUpdatedCity] = useState([])
    const [locationValue, setLocationValue] = useState({});
    const [completeValue, setCompleteValue] = useState();
    const [isVisible, setVisible] = useState(true);
    const { action } = useParams();
    // const { courseOfferedSince,
    //     courseAccreditingOrganisation,
    //     courseCertificateIssued } = initialFormValue.step2 || {}

    console.log("complete value ", completeValue)
    return (
        <div className="curriculum-profile-container">
            <Formik
                initialValues={{
                    courseDescription: '',
                    courseLearningObjectives: '',
                    courseExpectedOutcome: '',
                    courseSupportingDocument: '',
                    courseName: ''
                }}
                // validate={(values) => {

                // }}
                onSubmit={async (values, { setSubmitting }) => {
                    updateForm({ ...initialFormValue, step3: values, currentStep: 'step4' })
                    console.log('initialForm2', initialFormValue);
                    console.log('values', values);
                    setInitialForm(values);
                    setVisible(false);
                    setSubmitting(false);
                }}>

                {({ isValid, dirty, values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <>

                        <Form onSubmit={handleSubmit}>
                            <div className="company-form" style={{ marginTop: '2rem' }}>
                                <div className="input-section">
                                    <div className="first-section">
                                        <div className="company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>Module Name</p>
                                            <Field
                                                style={{ fontSize: '14px', paddingLeft: '20px' }}
                                                className="company-input-field"
                                                id="courseName"
                                                type="text"
                                                // disabled={action !== 'saveprofile'}
                                                name="courseName"
                                                placeholder=""
                                                // defaultValue={completeValue?.contactPersonFirstName}
                                                value={values.courseName}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>Expected Outcome</p>
                                            <Field
                                                style={{ fontSize: '14px', paddingLeft: '20px' }}
                                                className="company-input-field"
                                                id="courseExpectedOutcome"
                                                type="text"
                                                // disabled={action !== 'saveprofile'}
                                                name="courseExpectedOutcome"
                                                placeholder=""
                                                // defaultValue={completeValue?.contactPersonFirstName}
                                                value={values.courseExpectedOutcome}
                                                onChange={handleChange}
                                            />
                                        </div>

                                    </div>
                                    <div className="second-section">
                                        <div className="company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>Learning Objectives</p>
                                            <Field style={{ fontSize: '14px', paddingLeft: '20px' }}
                                                className="company-input-field"
                                                id="courseLearningObjectives"
                                                type="text"
                                                name="courseLearningObjectives"

                                                value={values.courseLearningObjectives}
                                                placeholder=""
                                            />

                                        </div>

                                        <div className="company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>Upload supporting documents</p>
                                            <select name="state"
                                                style={{
                                                    width: "106.5%",
                                                    height: "2.2rem",
                                                    borderRadius: '5px',
                                                    background: 'white',
                                                    color: 'grey',
                                                    border: '1px solid #d0d5dd',
                                                    paddingLeft: '20px',
                                                    fontSize: '16px',
                                                    placeholder: 'Upload file in PDF,CSV,DOC'
                                                }}
                                                onChange={(e) => handleStateChange()}>
                                                <option name="" value={values.courseSupportingDocument}> </option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                                <div className="curriculum-company-description">
                                    <p>Module Description</p>
                                    <textarea
                                        style={{ padding: '10px' }}
                                        className="curriculum-text-area"
                                        placeholder="About the course"
                                        name="courseDescription"
                                        id="courseDescription"
                                        type="text"
                                        // disabled={action !== 'saveprofile'}
                                        // defaultValue={completeValue?.instituteDescription}
                                        value={values.courseDescription}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div style={{ height: '60px', justifyContent: 'flex-end', display: 'flex', gap: '5px', marginLeft: '30%', width: '78.7%' }}>

                                    <Button
                                        // type="submit"
                                        onClick={() => {
                                            console.log('initialFormPrev', initialFormValue);
                                            updateForm({ ...initialFormValue, step3: values, currentStep: 'step2' })
                                        }}
                                        sx={{
                                            width: '10rem',
                                            fontWeight: 900,
                                            fontFamily: 'IBM Plex Sans',
                                            textTransform: 'capitalize',
                                            border: 'none',
                                            backgroundColor: '#0EAA4F',
                                            color: '#fff',
                                            marginRight: '3rem',
                                           
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

export default Curriculum3;


