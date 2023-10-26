import { ToggleButtonGroup, Button } from '@mui/material';
import React, { useState, useRef, useEffect, createContext, useContext } from 'react';
import AddPartner from '../curriculum/Curriculum';
import CompleteProfile from '../completeProfile/CompleteProfile';
import Profile from './../../../../../assets/profile.svg';
import Users from './../../../../../assets/users.svg';
import Activity from './../../../../../assets/activity.svg';
import logo from './../../../../../assets/ContainerLogo.svg';
import emptyProfile from './../../../../../assets/EmptyProfile.svg';
import { FiCheckSquare } from 'react-icons/fi';
import { FiArrowUpRight } from 'react-icons/fi';
import ActivityLog from '../../activityLog/ActivityLog';
import { AiOutlineEye } from 'react-icons/ai';
import Vector from './../../../../../assets/Vector.svg';
import { useSelector } from 'react-redux';
import ManageUsers from '../../manageUsers/ManageUsers';
import '../profile/profile.css';
import ManageUsersButton from '../../manageUsers/ManageUsersButton';
import ParentCurriculum from '../curriculum/ParentCurriculum';
import ManageUsersHeader from 'pages/dashboard/learnspaceAdmin/learnspaceDashboard/mainBar/manageUsers/ManageUsersHeader';

export const CurriculumContext = createContext({
    initialFormValue: {
        step1: {},
        step2: {},
        step3: {},
        step4: {},
        currentStep: 'step1'
    }, updateForm: (fv) => { }
});
const UpdateProfile = () => {
    const [status, setStatus] = useState('completeProfile');
    const [sideTab, setSideTab] = useState('profile');
    const [formValues, setFormValues] = useState({})
    const handleToggle = () => {
        setStatus(status);
    };
    const handleSideTab = () => {
        setSideTab(sideTab);
    };
    const [alignment, setAlignment] = useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const [images, setImages] = useState([]);
    const onChangeImage = (e) => {
        setImages([...e.target.files]);
        let type = e.target.files[0]?.type
        console.log(type)
        const allow = ['image/jpeg', 'image/jpg', 'image/png']
        if (allow.filter(x => x === type).length) {
            setFormValues({ ...formValues, image: e.target.files[0] });
        } else {
            alert('type not allowed')
        }
        console.log(e.target.files[0], 'onchange')
        console.log(images, 'images')
    };


    useEffect(() => {
        setStatus(status);
    }, [CompleteProfile]);
    const { userDetails: select } = useSelector((state) => state.learnSpace);
    console.log('select in training dashboard ', select);

    const trainingInstituteName = select?.details?.profile?.data[1]?.instituteName;
    const trainingWebsite = select?.details?.profile?.data[1]?.instituteWebsite;
    return (
        <div className="outlet">
            <div className="outletCards-container">
                <div className="first-container"></div>
                <div className="container-logo">
                </div>
            </div>
            <div className="outlet-filter">
                <div className="profile-picture">
                    <div style={{
                        left: ".6rem",
                        height: "5rem",
                        width: "5rem",
                        position: "absolute",
                        top: "-15rem",
                    }}
                    >
                        <label htmlFor='fileup'>
                            <input type="file" id="fileup" multiple="image/*" style={{ opacity: 0 }} onChange={onChangeImage} />
                            {formValues.image ? (
                                <img src={URL.createObjectURL(formValues.image)} width={'130px'} style={{ objectFit: 'cover', borderRadius: '100%' }} height={'130px'} alt="" />
                            ) : (
                                <img src={emptyProfile} alt="empty-profile" height={'130px'} width={'130px'} />)}
                        </label>
                    </div>
                </div>
                <div className="profile-detail">
                    <div>
                        <h3>{trainingInstituteName}</h3>
                        <p>{trainingWebsite}</p>
                    </div>
                    <div style={{ marginLeft: '34rem' }}>
                        <h3>Institute</h3>
                        <p>Profile</p>
                    </div>
                </div>
            </div>
            <div className="outlet-table">
                <div className="side-tab">
                    <ToggleButtonGroup
                        className="sidebar-button"
                        color="success"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                    >
                        <Button
                            onClick={() => setSideTab('profile')}
                            sx={{
                                width: '100%',
                                fontWeight: 900,
                                fontFamily: 'IBM Plex Sans',
                                textTransform: 'capitalize',
                                border: 'none',
                                justifyContent: 'space-between',
                                alignItems: 'left',
                                textAlign: 'left',
                                '&:hover': {
                                    color: '#0D9B48',
                                    backgroundColor: '#E7F7ED'
                                }
                            }}
                        >
                            <div style={{ justifyContent: 'space-between', display: 'flex', gap: '1rem' }}>
                                <img src={Profile} alt="profile" />
                                Profile
                            </div>
                            <div></div>
                        </Button>
                        <Button
                            onClick={() => setSideTab('manageUsers')}
                            sx={{
                                width: '100%',
                                fontWeight: 900,
                                fontFamily: 'IBM Plex Sans',
                                textTransform: 'capitalize',
                                border: 'none',
                                justifyContent: 'space-evenly',
                                '&:hover': {
                                    color: '#0D9B48',
                                    backgroundColor: '#E7F7ED'
                                }
                            }}
                        >
                            <div style={{ justifyContent: 'space-between', display: 'flex', gap: '1rem' }}>
                                <img src={Users} alt="users" />
                                Manage Users
                            </div>
                            <div></div>
                        </Button>
                    </ToggleButtonGroup>
                </div>
                {sideTab === 'profile' ? (
                    <div className="form-tab" style={{ height: '90%', width: '80%' }}>
                        <div className="form-tab-header">
                            <ToggleButtonGroup color="success" value={alignment} exclusive onChange={handleChange} aria-label="Platform" style={{ width: '100%', justifyContent: 'center' }}>
                                <Button
                                    id={`${status === "completeProfile" ? "activeProfile" : ""}`}
                                    onClick={() => setStatus('completeProfile')}
                                    sx={{
                                        width: '25rem',
                                        fontWeight: 900,
                                        fontFamily: 'IBM Plex Sans',
                                        textTransform: 'capitalize',
                                        border: 'none'

                                    }}
                                >
                                    Company Profile
                                </Button>
                                <Button
                                    id={`${status === "addPartners" ? "activeProfile" : ""}`}
                                    onClick={() => setStatus('addPartners')}

                                    sx={{
                                        width: '25rem',
                                        fontWeight: 900,
                                        fontFamily: 'IBM Plex Sans',
                                        textTransform: 'capitalize',
                                        border: 'none',


                                    }}
                                >
                                    Curriculum
                                </Button>
                            </ToggleButtonGroup>
                        </div>
                        <div className="form-details">{status === 'completeProfile' ? <CompleteProfile /> : <ParentCurriculum />}</div>
                    </div>
                ) : (
                    ''
                )}
                {sideTab === 'activityLog' ? (
                    <div className="form-tab">
                        <div
                            style={{
                                height: '200px',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'left',
                                boxShadow: 'var(--light-shadow)',
                                backgroundColor: '#fff',
                                borderRadius: '0.5rem'
                            }}
                        >
                            <div className="activity-details">
                                <h2 style={{ fontSize: '18px' }}>Your Activity</h2>
                                <p>See all your activities on this platform</p>
                            </div>
                            <div className="activity-div">
                                <ToggleButtonGroup style={{ width: '50%' }} color="success" value={alignment} exclusive onChange={handleChange} aria-label="Platform">
                                    <Button
                                        onClick={() => setStatus('allCohort')}
                                        sx={{
                                            fontWeight: 900,
                                            fontFamily: 'IBM Plex Sans',
                                            textTransform: 'capitalize',
                                            border: 'none',
                                            '&:hover': {
                                                color: '#0D9B48',
                                                backgroundColor: '#E7F7ED'
                                            }
                                        }}
                                    >
                                        All
                                    </Button>
                                    <Button
                                        onClick={() => setStatus('approved')}
                                        sx={{
                                            fontWeight: 900,
                                            fontFamily: 'IBM Plex Sans',
                                            textTransform: 'capitalize',
                                            border: 'none',
                                            '&:hover': {
                                                color: '#0D9B48',
                                                backgroundColor: '#E7F7ED'
                                            }
                                        }}
                                    >
                                        Part-time
                                    </Button>
                                    <Button
                                        onClick={() => setStatus('rejected')}
                                        sx={{
                                            fontWeight: 900,
                                            fontFamily: 'IBM Plex Sans',
                                            textTransform: 'capitalize',
                                            border: 'none',
                                            '&:hover': {
                                                color: '#0D9B48',
                                                backgroundColor: '#E7F7ED'
                                            }
                                        }}
                                    >
                                        Full-time
                                    </Button>
                                    <Button
                                        onClick={() => setStatus('pending')}
                                        sx={{
                                            fontWeight: 900,
                                            fontFamily: 'IBM Plex Sans',
                                            border: 'none',
                                            textTransform: 'capitalize',
                                            '&:hover': {
                                                color: '#0D9B48',
                                                backgroundColor: '#E7F7ED'
                                            }
                                        }}
                                    >
                                        Online
                                    </Button>

                                    <Button
                                        onClick={() => setStatus('pending')}
                                        sx={{
                                            fontWeight: 900,
                                            fontFamily: 'IBM Plex Sans',
                                            border: 'none',
                                            textTransform: 'capitalize',
                                            '&:hover': {
                                                color: '#0D9B48',
                                                backgroundColor: '#E7F7ED'
                                            }
                                        }}
                                    >
                                        Onsite
                                    </Button>
                                </ToggleButtonGroup>
                                <div className="graph-image">
                                    <img src={Vector} alt="graph" />
                                </div>
                            </div>
                        </div>
                        <div className="form-details" style={{ backgroundColor: '#FFF', maxHeight: '80%' }}>
                            <ActivityLog />
                        </div>
                    </div>
                ) : (
                    ''
                )}
                {sideTab === 'manageUsers' ? (
                    <div className="form-tab" style={{
                        borderRadius: '0.5rem',
                    }}>
                        <div className="form-tab-header-manage-users">
                            <ManageUsers />
                        </div>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default UpdateProfile;
