import React, { useState } from 'react';
import './CompleteProfile.css';
import ArrowDown from '../../../../../assets/ArrowDown.svg';
import { Button, Box, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PhoneInput from 'react-phone-input-2';
import validator from 'validator';
import { useSelector } from 'react-redux';
import 'react-phone-input-2/lib/style.css';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Country, State, City } from 'country-state-city';
import { getInsituteUrl, updateProfileUrl } from 'utils/api';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import nigerianStateLga from 'utils/lga/nigerianStateLga';
import { useEffect } from 'react';
import CompleteProfileEdit from './CompleteProfileEdit';
import Loader from 'react-loader-spinner';
import ErrorMssg from './ErrorMssg';

const CompleteProfile = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({});
    const [updatedStates, setUpdatedState] = useState([]);
    const [updatedCities, setUpdatedCity] = useState([]);
    const [locationValue, setLocationValue] = useState({});
    const [completeValue, setCompleteValue] = useState();
    const [profileComplete, setProfileComplete] = useState();
    const [instituteRegistrationDate, setInstituteRegistrationDate] = useState();
    const { action } = useParams();
    const [loading, setLoading] = useState(false);

    const [showEdit, setShowEdit] = useState(false);
    const { userDetails: selector } = useSelector((state) => state.learnSpace);
    const { userDetails: select } = useSelector((state) => state.learnSpace);

    const handleCountryChange = (e) => {
        const { name, value } = e.target;
        const countryObj = Country.getCountryByCode(value);
        const state = State.getStatesOfCountry(value);
        setUpdatedState(state);
        setLocationValue((s) => ({ ...s, [name]: countryObj.name }));
    };

    console.log(select);

    console.log('form errors ', Formik.errors);

    const handleStateChange = (e, ng) => {
        // console.log(e.target, 'city-target');
        // console.log(City.getCitiesOfState(...e.target.value))
        const { name, value } = e.target;
        console.log(ng);
        if (ng === 'ng') {
            const city = nigerianStateLga[value];
            // console.log(city, 'city')

            setUpdatedCity(city);
            setLocationValue((s) => ({ ...s, [name]: value }));
        } else {
            const [countryCode, stateCode] = value.split('-');
            const stateObj = State.getStateByCodeAndCountry(stateCode, countryCode);
            const city = City.getCitiesOfState(...e.target.value.split('-'));
            setUpdatedCity(city);
            setLocationValue((s) => ({ ...s, [name]: stateObj.name }));
        }
    };
    console.log('locVal', locationValue);
    const { country, state } = locationValue;

    const handleCityChange = (e, ng) => {
        const { name, value } = e.target;
        if (ng === 'ng') {
            const city = nigerianStateLga[value];
            // // console.log(city, 'city')
            setLocationValue((s) => ({ ...s, [name]: value }));
        } else {
            const [countryCode, stateCode] = value.split('-');
            const stateObj = State.getStateByCodeAndCountry(stateCode, countryCode);
            const city = City.getCitiesOfState(...e.target.value.split('-'));
            setUpdatedCity(city);
            setLocationValue((s) => ({ ...s, [name]: stateObj.name }));
        }
    };
    const countries = Country.getAllCountries();
    console.log(nigerianStateLga, 'nglga');

    // const [formValues, setFormValues] = useState(initialValues)
    const open = Boolean(anchorEl);
    const [phoneInput, setphoneInput] = React.useState('');
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    // const submit = async (values) => {
    //     const requestBody = {
    //         instituteEmailAddress: values.instituteEmailAddress,
    //         instituteRegistrationDate: values.instituteRegistrationDate,
    //         rcNumber: values.rcNumber,
    //         instituteTinNumber: values.instituteTinNumber,
    //         instituteDescription: values.instituteDescription,
    //         institutePhoneNumber: values.institutePhoneNumber,
    //         instituteLocation: {
    //             city: locationValue.city,
    //             state: locationValue.state,
    //             country: locationValue.country,
    //             buildingNumber: values.buildingNumber,
    //             streetName: values.streetName
    //         }
    //     };
    //     setLoading(true);
    //     try {
    //         const token = select.details.token;
    //         const id = select?.details?.profile?.data[1]?.id;
    //         const url = updateProfileUrl(id);
    //         const requestOptions = {
    //             method: 'PUT',
    //             body: JSON.stringify(requestBody),
    //             headers: {
    //                 'content-type': 'application/json',
    //                 Authorization: `Bearer ${token}`
    //             }
    //         };
    //         fetch(url, requestOptions);
    //         const res = await fetch(url, requestOptions)
    //         if (res.ok) {
    //             setLoading(false);
    //             console.log(res, 'resp')
    //             navigate('/admin/programme');
    //             // console.log('data here is: ', data);
    //             // setLoading(false);
    //         } else {
    //             const data = res.json();
    //             console.log(data, 'data');
    //         }

    //     } catch (err) { }
    // };
    // const fetchProfile = async () => {
    //     await fetch(getInsituteUrl(id), {
    //         method: 'GET',
    //         headers: {
    //             'Content-type': 'application/json',
    //             // Authorization: `Bearer ${token}`
    //         }
    //     })
    //         .then((res) => res.json())
    //         .then((res) => {
    //             setCompleteValue(res?.data);
    //         })
    //         .catch((err) => {
    //             throw new err();
    //         });
    // };

    // useEffect(() => {
    //     fetchProfile();
    // }, []);

    const completedProfile = selector?.details?.profile?.data[1]?.profileComplete;
    console.log('completed profile ', completedProfile);
    console.log('complete value ', completeValue);

    return (
        <div className="complete-profile-container">
            {!completedProfile ? (
                <Formik
                    initialValues={{
                        instituteDescription: '',
                        instituteTinNumber: '',
                        rcNumber: '',
                        instituteLocation: {
                            city: '',
                            state: '',
                            country: '',
                            buildingNumber: '',
                            streetName: ''
                        },
                        instituteEmailAddress: '',
                        institutePhoneNumber: '',
                        instituteRegistrationDate
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.instituteEmailAddress) {
                            errors.instituteEmailAddress = 'Email cannot be empty !';
                        } else if (!validator.isEmail(values.instituteEmailAddress)) {
                            errors.email = 'Please enter a valid email !';
                        }
                        if (!values.instituteDescription) {
                            errors.instituteDescription = 'Field Required!';
                        }
                        if (!values.institutePhoneNumber) {
                            errors.institutePhoneNumber = 'Field Required!';
                        }
                        if (!values.instituteTinNumber) {
                            errors.instituteTinNumber = 'Field Required!';
                        }
                        if (!values.rcNumber) {
                            errors.rcNumber = 'Field Required!';
                        }

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        // submit(values);
                        setSubmitting(false);
                    }}
                >
                    {({ isValid, dirty, values, errors, touched, handleChange, handleBlur }) => (
                        <Form>
                            <div className="company-description">
                                <p>Company Description</p>
                                <textarea
                                    style={{ padding: '10px' }}
                                    className="text-area"
                                    placeholder="Tell us a bit about yourself and what your company does"
                                    name="instituteDescription"
                                    id="instituteDescription"
                                    type="text"
                                    defaultValue={completeValue?.instituteDescription}
                                    value={values.instituteDescription}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                ></textarea>
                                <ErrorMessage name="instituteDescription" component={ErrorMssg} className="error-message" />
                            </div>

                            <div className="company-form">
                                <div className="input-section">
                                    <div className="first-section">
                                        <div className="company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>Company Email Address</p>
                                            <Field
                                                style={{ fontSize: '14px', paddingLeft: '20px' }}
                                                className="company-input-field"
                                                id="instituteEmailAddress"
                                                type="email"
                                                required
                                                name="instituteEmailAddress"
                                                value={values.instituteEmailAddress}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <ErrorMessage name="instituteEmailAddress" component={ErrorMssg} className="error-message" />
                                        </div>
                                        {country === 'Nigeria' ? (
                                            <div className="company-email">
                                                <p style={{ color: 'black', lineHeight: '0px' }}>State</p>
                                                <select
                                                    className="company-input-field"
                                                    name="state"
                                                    style={{
                                                        height: '2rem',
                                                        borderRadius: '5px',
                                                        color: 'grey',
                                                        border: '1px solid #d0d5dd',
                                                        paddingLeft: '20px',
                                                        fontSize: '16px'
                                                    }}
                                                    onChange={(e) => handleStateChange(e, 'ng')}
                                                    placeHolder="select"
                                                >
                                                    {Object.keys(nigerianStateLga)?.map((state) => {
                                                        return (
                                                            <option name={'state'} value={state}>
                                                                {state}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            </div>
                                        ) : (
                                            <div className="company-email">
                                                <p style={{ color: 'black', lineHeight: '0px' }}>States</p>
                                                <select
                                                    className="company-input-field"
                                                    name="state"
                                                    style={{
                                                        height: '2rem',
                                                        borderRadius: '5px',
                                                        color: 'grey',
                                                        border: '1px solid #d0d5dd',
                                                        paddingLeft: '20px',
                                                        fontSize: '16px'
                                                    }}
                                                    onChange={(e) => handleStateChange(e, 'ng')}
                                                >
                                                    {updatedStates?.map(({ name, isoCode, countryCode }) => {
                                                        return (
                                                            <option defaultValue="select" name={name} value={`${countryCode}-${isoCode}`}>
                                                                {name} {}{' '}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            </div>
                                        )}
                                        <div className="company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>Street Name</p>
                                            <Field
                                                className="company-input-field"
                                                style={{ fontSize: '14px', paddingLeft: '20px' }}
                                                id="streetName"
                                                type="text"
                                                name="streetName"
                                                placeholder="E.g Borno way"
                                                value={values.streetName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                        <div className="company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>RC Number</p>
                                            <Field
                                                style={{ fontSize: '14px', paddingLeft: '20px' }}
                                                className="company-input-field"
                                                id="rcNumber"
                                                type="number"
                                                name="rcNumber"
                                                onKeyDown={(evt) =>
                                                    (evt.key === 'e' && evt.preventDefault()) || (evt.key === '.' && evt.preventDefault())
                                                }
                                                value={String(values.rcNumber)}
                                            />
                                            <ErrorMessage name="rcNumber" component={ErrorMssg} className="error-message" />
                                        </div>
                                        <div className="company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>Registration Date</p>
                                            <Field
                                                style={{ fontSize: '14px', paddingLeft: '20px' }}
                                                className="company-input-field"
                                                id="instituteRegistrationDate"
                                                type="date"
                                                value={instituteRegistrationDate}
                                                onChange={(e) => setInstituteRegistrationDate(e.target.value)}
                                                placeholder="E.g 12/12/12"
                                            />
                                            {/* <ErrorMessage
                                                name="instituteRegistrationDate"
                                                component={ErrorMssg}
                                                className="error-message"
                                            /> */}
                                        </div>
                                    </div>
                                    <div className="second-section">
                                        <div className="company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>Country</p>
                                            <select
                                                name="country"
                                                onChange={handleCountryChange}
                                                style={{
                                                    width: '24rem',
                                                    height: '2rem',
                                                    borderRadius: '5px',
                                                    border: '1px solid #d0d5dd',
                                                    paddingLeft: '20px',
                                                    fontSize: '16px'
                                                }}
                                            >
                                                {countries.map(({ name, isoCode }) => {
                                                    return (
                                                        <option name={name} value={isoCode}>
                                                            {name}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </div>
                                        {country === 'Nigeria' ? (
                                            <div className="company-email">
                                                <p style={{ color: 'black', lineHeight: '0px' }}>City</p>
                                                <select
                                                    name="city"
                                                    style={{
                                                        width: '24rem',
                                                        height: '2rem',
                                                        borderRadius: '5px',
                                                        color: 'grey',
                                                        border: '1px solid #d0d5dd',
                                                        paddingLeft: '20px',
                                                        fontSize: '16px'
                                                    }}
                                                    onChange={(e) => handleStateChange(e, 'ng')}
                                                >
                                                    {nigerianStateLga[state]?.map((city) => {
                                                        return (
                                                            <option name={'city'} value={city}>
                                                                {' '}
                                                                {city}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            </div>
                                        ) : (
                                            <div className="company-email">
                                                <p style={{ color: 'black', lineHeight: '0px' }}>City</p>
                                                <select
                                                    name="city"
                                                    style={{
                                                        width: '24rem',
                                                        height: '2rem',
                                                        borderRadius: '5px',
                                                        border: '1px solid #d0d5dd',
                                                        paddingLeft: '20px',
                                                        fontSize: '16px'
                                                    }}
                                                    onChange={handleCityChange}
                                                >
                                                    {updatedCities?.map(({ name }) => {
                                                        return (
                                                            <option name={name} value={name}>
                                                                {name}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            </div>
                                        )}

                                        <div className="company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>Building Number</p>
                                            <Field
                                                style={{ fontSize: '14px', paddingLeft: '20px' }}
                                                className="company-input-field"
                                                id="buildingNumber"
                                                type="text"
                                                name="buildingNumber"
                                                placeholder="e.g No 1"
                                                onKeyDown={(evt) =>
                                                    (evt.key === 'e' && evt.preventDefault()) || (evt.key === '.' && evt.preventDefault())
                                                }
                                                value={values.buildingNumber}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                        <div className="company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>TIN</p>
                                            <Field
                                                style={{ fontSize: '14px', paddingLeft: '20px' }}
                                                className="company-input-field"
                                                id="instituteTinNumber"
                                                type="number"
                                                name="instituteTinNumber"
                                                placeholder="xxxxxxxx-xxxx"
                                                value={String(values.instituteTinNumber)}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <ErrorMessage name="instituteTinNumber" component={ErrorMssg} className="error-message" />
                                        </div>
                                        <div className="company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>Institute Phone Number</p>
                                            <Field
                                                style={{ fontSize: '14px', paddingLeft: '20px' }}
                                                className="company-input-field"
                                                id="institutePhoneNumber"
                                                type="number"
                                                name="institutePhoneNumber"
                                                placeholder="E.g +234-xx-xx-xxx"
                                                value={String(values.institutePhoneNumber)}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <ErrorMessage name="institutePhoneNumber" component={ErrorMssg} className="error-message" />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        height: '50px',
                                        justifyContent: 'space-between',
                                        display: 'flex',
                                        gap: '1rem',
                                        marginLeft: '60%'
                                    }}
                                >
                                    <Button
                                        type="submit"
                                        onClick={''}
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
                                                color: '#0EAA4F',
                                                backgroundColor: '#FFF',
                                                outline: '#0EAA4F solid 1px'
                                            }
                                        }}
                                    >
                                        {loading && <Loader type="TailSpin" color="#FFF" height={20} width={20} />}
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
                                                        fontWeight: 700,
                                                        fontSize: '16px',
                                                        color: '#FFF',
                                                        textTransform: 'capitalize',
                                                        fontFamily: 'IBM Plex Sans',
                                                        fontStyle: 'normal'
                                                    }}
                                                >
                                                    login
                                                </Typography>
                                            </Box>
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            ) : (
                <CompleteProfileEdit />
            )}
        </div>
    );
};

export default CompleteProfile;
