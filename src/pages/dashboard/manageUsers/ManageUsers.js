import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import './manageUsers.css';
import data from './data';
import ManageUsersButton from './ManageUsersButton';
import ManageUsersHeader from 'pages/dashboard/learnspaceAdmin/learnspaceDashboard/mainBar/manageUsers/ManageUsersHeader';
const ManageUsers = () => {
    // const rows = [
    //     {
    //         id: 1,
    //         full_name: 'Sobambo Adedotun',
    //         email: 'mwhatham0@comsenz.com',
    //         assigned_role: 'Finance Manager',
    //         status: 'Active',
    //         date_joined: 'May 1, 2022, 09:09 AM',
    //         action: ''
    //     },
    //     {
    //         id: 2,
    //         full_name: 'Sobambo Adedotun',
    //         email: 'mwhatham0@comsenz.com',
    //         assigned_role: 'Finance Manager',
    //         status: 'Active',
    //         date_joined: 'May 1, 2022, 09:09 AM',
    //         action: ''
    //     },
    //     {
    //         id: 3,
    //         full_name: 'Sobambo Adedotun',
    //         email: 'mwhatham0@comsenz.com',
    //         assigned_role: 'Finance Manager',
    //         status: 'Active',
    //         date_joined: 'May 1, 2022, 09:09 AM',
    //         action: ''
    //     },
    //     {
    //         id: 4,
    //         full_name: 'Sobambo Adedotun',
    //         email: 'mwhatham0@comsenz.com',
    //         assigned_role: 'Finance Manager',
    //         status: 'Active',
    //         date_joined: 'May 1, 2022, 09:09 AM',
    //         action: ''
    //     },
    //     {
    //         id: 5,
    //         full_name: 'Sobambo Adedotun',
    //         email: 'mwhatham0@comsenz.com',
    //         assigned_role: 'Finance Manager',
    //         status: 'Active',
    //         date_joined: 'May 1, 2022, 09:09 AM',
    //         action: ''
    //     },
    //     {
    //         id: 6,
    //         full_name: 'Sobambo Adedotun',
    //         email: 'mwhatham0@comsenz.com',
    //         assigned_role: 'Finance Manager',
    //         status: 'Active',
    //         date_joined: 'May 1, 2022, 09:09 AM',
    //         action: ''
    //     }
    // ];

    // const columns = [
    //     {
    //         name: 'Full Name',
    //         selector: (row) => row.first_name
    //     },
    //     {
    //         name: 'Email',
    //         selector: (row) => row.email
    //     },
    //     {
    //         name: 'Assigned Role',
    //         selector: (row) => row.assigned_role
    //     },
    //     {
    //         name: 'Status',
    //         selector: (row) => row.status
    //     },
    //     {
    //         name: 'Date Joined',
    //         selector: (row) => row.date_joined
    //     },
    //     {
    //         name: 'Action',
    //         selector: (row) => row.action
    //     }
    // ];

    const active = () => {
        <div>
            <p>Resend</p>
            <p>Deactivate</p>
        </div>;
    };

    return (
        <div className="manage-users-container">
            <ManageUsersButton />
            <ManageUsersHeader />
            <div className="manage-users-info" style={{
                marginTop: '70px'
            }}>
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Email</th>
                        <th>Assigned Role</th>
                        <th>Status</th>
                        <th>Date Joined</th>
                        <th>Action</th>
                    </tr>

                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
