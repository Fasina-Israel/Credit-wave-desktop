import React, { useState } from 'react';
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
import { useEffect, useContext } from 'react';
import Curriculum2 from './Curriculum2';
import { CurriculumContext } from '../outlet/UpdateProfile';


const Curriculum = ({ values }) => {
    const { updateForm, initialFormValue } = useContext(CurriculumContext);

    console.log(initialFormValue, 'cctx');

    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({});
    const [isVisible, setVisible] = useState(true);

    const [initialForm, setInitialForm] = useState();

    const [completeValue, setCompleteValue] = useState();

    const { courseDescription,
        courseLearningObjectives,
        courseExpectedOutcome,
        courseSupportingDocument,
        courseName } = initialFormValue.step1 || {}
    return (
        <div className="curriculum-profile-container">
            <Formik
                initialValues={{
                    courseDescription: courseDescription ?? '',
                    courseLearningObjectives: courseLearningObjectives ?? '',
                    courseExpectedOutcome: courseExpectedOutcome ?? '',
                    courseSupportingDocument: courseSupportingDocument ?? '',
                    courseName: courseName ?? ''
                }}
                onSubmit={async (values, { setSubmitting }) => {

                    updateForm({ ...initialFormValue, step1: values, currentStep: 'step2' })

                    console.log('initialForm', initialFormValue);
                }}>

                {({ isValid, dirty, values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <>

                        <Form onSubmit={handleSubmit}>
                            <div className="company-form" style={{ marginTop: '2rem' }}>
                                <div className="input-section">
                                    <div className="first-section">
                                        <div className="company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>Course Name</p>
                                            <Field
                                                style={{ fontSize: '14px', paddingLeft: '20px' }}
                                                className="company-input-field"
                                                id="courseName"
                                                type="text"
                                                name="courseName"
                                                placeholder=""
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
                                                name="courseExpectedOutcome"
                                                placeholder=""
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
                                                onChange={handleChange}
                                            />

                                        </div>

                                        <div className="company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>Upload supporting documents</p>
                                            <Field style={{ fontSize: '14px', paddingLeft: '20px' }}
                                                className="company-input-field"
                                                id="fileup"
                                                type="file"
                                                name="courseLearningObjectives"
                                                value={values.courseLearningObjectives}
                                                placeholder=""
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className="curriculum-company-description">
                                    <p>Course Description</p>
                                    <textarea
                                        style={{ padding: '10px' }}
                                        className="curriculum-text-area"
                                        placeholder="About the course"
                                        name="courseDescription"
                                        id="courseDescription"
                                        type="text"
                                        value={values.courseDescription}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div style={{ display: "flex", justifyContent: 'flex-end', alignItems: 'flex-end', position: "relative", left: '22px' }}>

                                    <Button
                                        type="submit"
                                        onClick={() => {
                                        }}
                                        sx={{
                                            width: '10rem',
                                            fontWeight: 900,
                                            fontFamily: 'IBM Plex Sans',
                                            textTransform: 'capitalize',
                                            border: 'none',
                                            backgroundColor: '#0EAA4F',
                                            color: '#fff',
                                            '&:hover': {
                                                backgroundColor: '#0EAA4F',
                                                color: '#FFF',

                                            }
                                        }}
                                    >
                                        Next
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </>)}
            </Formik>
        </div >
    );
};

export default Curriculum;


