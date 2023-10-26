import React from 'react';
import Vector from './../../../assets/Vector.svg';
import './activityTask.css';

const ActivityLogHeader = () => {
    return (
        <div className="activity-log-container">
            <div className="activity-log-second">
                <div className="activity-log">
                    <h2>Your Activity</h2>
                    <p>See all your activities on this platform</p>
                </div>
                <div className="activity-log-lists">
                    <ul>
                        <li>All</li>
                        <li>Today</li>
                        <li>This week</li>
                        <li>This month</li>
                        <li>Last Quarter</li>
                        <li>Set my date filter</li>
                    </ul>
                </div>
                <div className="activity-log-image">
                    <img src={Vector} alt="graph" />
                </div>
            </div>
        </div>
    );
};

export default ActivityLogHeader;
