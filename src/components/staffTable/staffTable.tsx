import React, { useState } from 'react';
import { UserDTO } from '../../models/IUser';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPencil,
    faSearch,
    faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Pagination, Form } from 'react-bootstrap';
import '../../css/staffTable.css';

const StaffTable: React.FC<{ userData: UserDTO[] }> = ({ userData }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const itemsPerPage = 5;

    const handleAddStaff = (): void => {
        console.log('Add staff functionality should be implemented here.');
        // Implement add staff functionality
    };

    const handleDeleteStaff = (): void => {
        console.log('Delete staff functionality should be implemented here.');
        // Implement delete staff functionality
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = userData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

    const handleSearchChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // Reset to first page when searching
    };

    const filteredItems = currentItems.filter((user) => {
        return (
            user.fname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.lname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.phoneNumber?.includes(searchTerm)
        );
    });

    return (
        <div className="compnentStaffTableP">
            <div className="d-flex justify-content-between mb-3">
                <div className="d-flex flex-column align-items-start">
                    <h2 className="mb-0">Staff List</h2>
                    <span>Number of employees: {userData.length}</span>
                </div>

                <div>
                    <DropdownButton
                        id="dropdown-basic-button"
                        title="Manage Staff"
                        variant="secondary"
                        className="action-dropdown"
                    >
                        <Dropdown.Item onClick={handleAddStaff}>
                            Add Staff
                        </Dropdown.Item>
                        <Dropdown.Item onClick={handleDeleteStaff}>
                            Delete Staff
                        </Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
            <div className="d-flex align-items-center flex-grow-1">
                <FontAwesomeIcon icon={faSearch} size="lg" className="me-2 " />
                <Form.Group
                    controlId="searchBar"
                    className="ml-2 mb-0 flex-grow-1"
                >
                    <Form.Control
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </Form.Group>
            </div>

            {filteredItems.length === 0 ? ( // Check if no items are found after filtering
                <div className="py-5 text-center">No user found.</div>
            ) : (
                <Table bordered hover responsive="sm">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredItems.map((user, index) => (
                            <tr key={index}>
                                <td
                                    className="text-center"
                                    style={{ fontWeight: 'bold' }}
                                >
                                    {user.userId}
                                </td>
                                <td>{user.fname + ' ' + user.lname}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneNumber}</td>
                                <td>
                                    <FontAwesomeIcon
                                        icon={faPencil}
                                        style={{ marginRight: '12px' }}
                                    />
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}

            <div className="d-flex justify-content-center">
                <Pagination>
                    {Array.from(
                        { length: Math.ceil(userData.length / itemsPerPage) },
                        (_, i) => (
                            <Pagination.Item
                                key={i}
                                active={i + 1 === currentPage}
                                onClick={() => paginate(i + 1)}
                            >
                                {i + 1}
                            </Pagination.Item>
                        )
                    )}
                </Pagination>
            </div>
        </div>
    );
};

export default StaffTable;
