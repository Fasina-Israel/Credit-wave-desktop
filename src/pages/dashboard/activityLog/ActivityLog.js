import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { FiCheckSquare } from 'react-icons/fi';
import { FiArrowUpRight } from 'react-icons/fi';
import ActivityLogContent from './ActivityLogContent'
import './activity.css';

const ActivityLog = () => {
    return (
        <>
            <div style={{ width: '100%', background: '#fff' }}>
                <ActivityLogContent />
            </div>
        </>

    );
};

export default ActivityLog;
