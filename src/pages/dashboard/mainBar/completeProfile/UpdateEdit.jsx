import './completeProfileEdit.css';
import React, { useState } from 'react';
import './CompleteProfile.css';
import ArrowDown from '../../../../../assets/ArrowDown.svg';
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Country, State, City } from 'country-state-city';
import { useSelector } from 'react-redux';
import { getInsituteUrl, updateProfileUrl } from 'utils/api';
import { Formik, Field, Form } from 'formik';
import nigerianStateLga from 'utils/lga/nigerianStateLga';
import { useEffect } from 'react';

const UpdateEdit = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        instituteEmailAddress: '',
        instituteRegistrationDate: '',
        instituteDescription: '',
        instituteLocation: '',
        institutePhoneNumber: '',
        instituteTinNumber: ''
    });
    const [updatedStates, setUpdatedState] = useState([]);
    const [updatedCities, setUpdatedCity] = useState([]);
    const [locationValue, setLocationValue] = useState({});
    const [completeValue, setCompleteValue] = useState();
    const [profileComplete, setProfileComplete] = useState();
    const [instituteRegistrationDate, setInstituteRegistrationDate] = useState();
    const { action } = useParams();

    const [showEdit, setShowEdit] = useState(false);
    const { userDetails: select } = useSelector((state) => state.learnSpace);

    const handleCountryChange = (e) => {
        const { name, value } = e.target;
        const countryObj = Country.getCountryByCode(value);
        const state = State.getStatesOfCountry(value);
        setUpdatedState(state);
        setLocationValue((s) => ({ ...s, [name]: countryObj.name }));
    };

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

    const { userDetails: selector } = useSelector((state) => state.learnSpace);

    const token = selector?.details?.token;
    const Id = selector?.details?.profile?.data?.[1]?.id;

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
    // const submit = (values) => {
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
    //     try {
    //         const token = select.details.token;
    //         const id = select.details.profile.data[1].id;
    //         const url = updateProfileUrl(id);
    //         const requestOptions = {
    //             method: 'POST',
    //             body: JSON.stringify(requestBody),
    //             headers: {
    //                 'content-type': 'application/json',
    //                 Authorization: `Bearer ${token}`
    //             }
    //         };
    //         fetch(url, requestOptions).then((res) => console.log(res, 'res'));
    //         if (res.status == 200) {
    //             navigate('admin/empty_dashboard-addProgram');
    //             console.log('data here is: ', data);
    //         }
    //         const data = res.json();
    //         console.log(data, 'data');
    //     } catch (err) {}
    // };
    // const fetchProfile = async () => {
    //     await fetch(getInsituteUrl(Id), {
    //         method: 'GET',
    //         headers: {
    //             'Content-type': 'application/json',
    //             Authorization: `Bearer ${token}`
    //         }
    //     })
    //         .then((res) => res.json())
    //         .then((res) => {
    //             setCompleteValue(res?.data);
    //             setFormValues(res?.data);
    //         })
    //         .catch((err) => {
    //             throw new err();
    //         });
    // };

    // useEffect(() => {
    //     fetchProfile();
    // }, []);

    console.log('selec ', selector);
    const completedProfile = selector?.details?.profile?.data[1]?.profileComplete;
    console.log('completed profile ', completedProfile);
    console.log('complete value ', completeValue);
    return (
        <div className="complete-profile-container">
            <Formik
                enableReinitialize
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
                // validate={(values) => {

                // }}
                onSubmit={(values, { setSubmitting }) => {
                    // submit(values);
                    setSubmitting(false);
                }}
            >
                {({ isValid, dirty, values, errors, touched, handleChange, handleBlur }) => (
                    <Form>
                        <div className="company-description">
                            <p>Company Descrn</p>
                            <textarea
                                style={{ padding: '10px' }}
                                className="text-area"
                                placeholder="Tell us a bit about yourself and what your company does"
                                name="instituteDescription"
                                id="instituteDescription"
                                type="text"
                                defaultValue={completeValue?.instituteDescription}
                                value={values.instituteDescription}
                                onChange={(e) => setFormValues({ ...formValues, instituteDescription: e.target.value })}
                            ></textarea>
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
                                            type="text"
                                            name="instituteEmailAddress"
                                            placeholder="Semicolon@Africa"
                                            value={completeValue?.instituteWebsite}
                                            onChange={(e) => setCompleteValue({ ...completeValue, instituteEmailAddress: e.target.value })}
                                        />
                                    </div>
                                    {country === 'Nigeria' ? (
                                        <div className="company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>States</p>
                                            <select
                                                name="state"
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
                                                {Object.keys(nigerianStateLga)?.map((state) => {
                                                    return (
                                                        <option name={'state'} value={state}>
                                                            {' '}
                                                            {state}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </div>
                                    ) : (
                                        <div className="company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>State</p>
                                            <select
                                                name="state"
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
                                                {updatedStates?.map(({ name, isoCode, countryCode }) => {
                                                    return (
                                                        <option name={name} value={`${countryCode}-${isoCode}`}>
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
                                            placeholder="E.g No 1"
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
                                            placeholder="E.g 12/12/12"
                                        />
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
                                            placeholder=""
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
                                            placeholder="E.g No 1"
                                            value={String(values.instituteTinNumber)}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </div>
                                    <div className="company-email">
                                        <p style={{ color: 'black', lineHeight: '0px' }}>Institute Phone Number</p>
                                        <Field
                                            style={{ fontSize: '14px', paddingLeft: '20px' }}
                                            className="company-input-field"
                                            id="institutePhoneNumber"
                                            type="number"
                                            name="institutePhoneNumber"
                                            placeholder="E.g No 1"
                                            value={String(values.institutePhoneNumber)}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{ height: '50px', justifyContent: 'space-between', display: 'flex', gap: '1rem', marginLeft: '60%' }}
                            >
                                <Button
                                    type="submit"
                                    onClick={() => {
                                        // console.log('I was clicked ');
                                        navigate('/admin/complete');
                                    }}
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
                                    Save
                                </Button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UpdateEdit;
