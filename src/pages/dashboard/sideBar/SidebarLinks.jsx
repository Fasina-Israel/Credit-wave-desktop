import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaSignOutAlt, FaThLarge, FaRegSun, FaUserAlt } from 'react-icons/fa';
import Logout from '../mainBar/outlet/Logout';

export const upperLinks = [
    {
        id: 1,
        url: '/admin/programme',
        text: 'Dashboard',
        icon: <FaThLarge />
    }
];

export const lowerLinks = [
    {
        id: 7,
        url: '/admin/settings',
        type: 'link',
        text: 'Settings',
        icon: <FaRegSun />
    },
    // {
    //     id: 8,
    //     type: 'function',
    //     render: ({ handleLogoutModal, LogOutModal }) => <Logout handleLogoutModal={handleLogoutModal} LogOutModal={LogOutModal} />,
    //     text: 'Logout',
    //     icon: <FaSignOutAlt />
    // }
];

export const social = [
    {
        id: 1,
        url: 'https://www.facebook.com',
        icon: <FaFacebook />
    },
    {
        id: 2,
        url: 'https://www.twitter.com'
    },
    {
        id: 3,
        url: 'https://www.linkedIn.com',
        icon: <FaLinkedin />
    },
    {
        id: 4,
        url: 'https://www.behance.com',
        icon: <FaBehance />
    }
];
