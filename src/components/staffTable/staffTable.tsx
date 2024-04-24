import React from 'react';
import { UserDTO } from '../../models/IUser';

const StaffTable: React.FC<{ userData: UserDTO[] }> = ({ userData }) => {
    return (
        <div>
            <h2>Staff List</h2>
            <ul>
                {userData.map((user, index) => (
                    <li key={index}>
                        <div>Name: {user.fname}</div>
                        <div>Email: {user.email}</div>
                        {/* Add more user information as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StaffTable;
