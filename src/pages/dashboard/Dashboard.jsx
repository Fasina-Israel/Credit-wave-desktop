import React, { useState, useEffect, createContext } from 'react';
import Mainbar from './mainBar';
import Sidebar from './sideBar/Sidebar';
import './Dashboard.css';
export const DashboardContext = createContext();

function Dashboard() {
    const [width, setWidth] = useState();
    const [open, setOpen] = useState(true);

    const [LogOutModal, setLogOutModal] = useState(false);
    const closeWidth = '68px';
    const handleDrawer = () => {
        setOpen(!open);
    };
    const handleLogoutModal = (show) => {
        setLogOutModal(show)
    }
    return (
        <DashboardContext.Provider value={{ handleDrawer, width, closeWidth, setWidth, open, setOpen, handleLogoutModal, LogOutModal }}>
            <div className="dashboard">
                <Sidebar />
                <Mainbar />
                
            </div>
        </DashboardContext.Provider>
    );
}

export default Dashboard;
