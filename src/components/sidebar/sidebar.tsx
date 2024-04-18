/* eslint-disable max-len */
import React from 'react';
import 'bootstrap'; // Import Bootstrap JavaScript
import '../../css/sidebar.css';
import { useAuth } from '../../conf/useAuth';
import { Button } from 'react-bootstrap';

interface SidebarProps {
    navItems: { href: string; text: string; icon: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ navItems }) => {
    const { logout } = useAuth();
    const handleLogout = (): void => {
        logout();
    };
    return (
        <nav
            className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar-full-height"
            style={{ width: '250px' }}
        >
            <a
                href="/g"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
                <svg className="bi me-2" width="40" height="32">
                    <use xlinkHref="#bootstrap" />
                </svg>
                <span className="fs-4">PNTA</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                {navItems.map((item, index) => (
                    <li key={index} className="nav-item">
                        <a
                            href={item.href}
                            className="nav-link text-white"
                            aria-current="page"
                        >
                            <svg className="bi me-2" width="16" height="16">
                                <use xlinkHref={item.icon} />
                            </svg>
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
            <hr />
            <div className="dropdown">
                <a
                    href="/g"
                    className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                    id="dropdownUser1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <img
                        src="https://github.com/mdo.png"
                        alt=""
                        width="32"
                        height="32"
                        className="rounded-circle me-2"
                    />
                    <strong>Peter giner</strong>
                </a>
                <ul
                    className="dropdown-menu dropdown-menu-dark text-small shadow"
                    aria-labelledby="dropdownUser1"
                >
                    <li>
                        <a className="dropdown-item" href="/g">
                            New Venue...
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="/g">
                            Settings
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="/g">
                            Profile
                        </a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <Button
                            className="dropdown-item"
                            onClick={handleLogout}
                        >
                            Sign out
                        </Button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;
