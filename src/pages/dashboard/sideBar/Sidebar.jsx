import React, { useState, useEffect, useRef, useContext } from 'react';
import { upperLinks, lowerLinks } from './SidebarLinks';
import { FaBars } from 'react-icons/fa';
import './Sidebar.css';
import Dashboard from '../../../assets/Dashboard.svg';
import LearnspaceIcon from '../../../assets/learnspace-icon.svg';
import MobileLearnspace from '../../../assets/MobileLearnspace.svg';
import { NavLink } from 'react-router-dom';
import { DashboardContext } from '../Dashboard';
import { useSelector } from 'react-redux';

function Sidebar() {
    const { width, open, handleLogoutModal, LogOutModal } = useContext(DashboardContext);
    const [showLinks, setShowLinks] = useState(false);
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };
    let activeStyle = {
        textDecoration: 'underline'
    };

    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    const { userDetails: select } = useSelector((state) => state.learnSpace);
    const completedProfile = select?.details?.profile?.data[1]?.profileComplete;

    return (
        <>
            {width === '200px' ? (
                <div className="sidebar-container" style={{ width: width }}>
                    <div className="sidebar-logo">
                        <img src={MobileLearnspace} alt="logo" />
                    </div>
                    <div className="sidebarLinks-container">
                        <div className="sidebar-cont" aria-disabled={true}>
                            <ul className="sidebar-box" ref={linksRef}>
                                {upperLinks.map((link) => {
                                    const { id, url, text, icon } = link;
                                    return (
                                        <NavLink
                                            to={url}
                                            style={{ textDecoration: 'none' }}
                                            className={({ isActive }) => `sidebar-links ${isActive ? 'activeClassName' : 'sidebar-links'}`}
                                        >
                                            {icon}
                                            {text}
                                        </NavLink>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="sidebar-cont2" aria-disabled={true}>
                            <ul className="sidebar-box" ref={linksRef}>
                                {lowerLinks.map((item) => {
                                    const { id, url, type, text, render, icon } = item;
                                    return type === 'function' ? (
                                        render({ handleLogoutModal, LogOutModal })
                                    ) : (
                                        <NavLink
                                            style={{ textDecoration: 'none' }}
                                            to={url}
                                            className={({ isActive }) => `sidebar-links ${isActive ? 'activeClassName' : 'sidebar-links'}`}
                                        >
                                            {icon}
                                            {text}
                                        </NavLink>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="sidebar-container" style={{ width: width }}>
                    <div className="sidebar-logo">
                        <img src={LearnspaceIcon} alt="logo" />
                        {/* {`${width} ${open}`} */}
                    </div>
                    <div className="sidebarLinks-container">
                        <div className="sidebar-cont">
                            <ul className="sidebar-box" ref={linksRef}>
                                {upperLinks.map((link) => {
                                    const { id, url, text, icon } = link;
                                    return (
                                        <NavLink
                                            to={url}
                                            className={({ isActive }) =>
                                                `sidebar-links-toggle ${isActive ? 'activeClassName' : 'sidebar-links-toggle'}`
                                            }
                                        >
                                            {icon}
                                        </NavLink>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="sidebar-cont2">
                            <ul className="sidebar-box" ref={linksRef}>
                                {lowerLinks.map((link) => {
                                    const { id, url, text, icon } = link;
                                    return (
                                        <NavLink
                                            to={url}
                                            className={({ isActive }) =>
                                                `sidebar-links-toggle ${isActive ? 'activeClassName' : 'sidebar-links-toggle'}`
                                            }
                                        >
                                            {icon}
                                        </NavLink>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Sidebar;
