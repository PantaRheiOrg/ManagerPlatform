import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './css/sb-admin-2.min.css'; // Import custom SB Admin 2 CSS
import './css/sb-admin-2.css'; // Import custom SB Admin 2 CSS
import 'bootstrap'; // Import Bootstrap JavaScript
import {
    faLaughWink,
    faTachometerAlt,
    faCog,
    faWrench,
    faFolder,
    faChartArea,
    faTable,
} from '@fortawesome/free-solid-svg-icons'; // Import necessary FontAwesome icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component

const CHeader: React.FC = () => {
    return (
        <ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
        >
            {/* Sidebar - Brand */}
            <button
                className="sidebar-brand d-flex align-items-center justify-content-center"
                onClick={() => (window.location.href = 'index.html')}
            >
                <div className="sidebar-brand-icon rotate-n-15">
                    <FontAwesomeIcon icon={faLaughWink} />
                </div>
                <div className="sidebar-brand-text mx-3">
                    SB Admin <sup>2</sup>
                </div>
            </button>

            {/* Divider */}
            <hr className="sidebar-divider my-0" />

            {/* Nav Item - Dashboard */}
            <li className="nav-item active">
                <button
                    className="nav-link"
                    onClick={() => (window.location.href = 'index.html')}
                >
                    <FontAwesomeIcon icon={faTachometerAlt} />
                    <span>Dashboard</span>
                </button>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider" />

            {/* Heading */}
            <div className="sidebar-heading">Interface</div>

            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <button
                    className="nav-link collapsed"
                    onClick={() => (window.location.href = '#collapseTwo')}
                >
                    <FontAwesomeIcon icon={faCog} />
                    <span>Components</span>
                </button>
                <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionSidebar"
                >
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <button
                            className="collapse-item"
                            onClick={() =>
                                (window.location.href = 'buttons.html')
                            }
                        >
                            Buttons
                        </button>
                        <button
                            className="collapse-item"
                            onClick={() =>
                                (window.location.href = 'cards.html')
                            }
                        >
                            Cards
                        </button>
                    </div>
                </div>
            </li>

            {/* Nav Item - Utilities Collapse Menu */}
            <li className="nav-item">
                <button
                    className="nav-link collapsed"
                    onClick={() =>
                        (window.location.href = '#collapseUtilities')
                    }
                >
                    <FontAwesomeIcon icon={faWrench} />
                    <span>Utilities</span>
                </button>
                <div
                    id="collapseUtilities"
                    className="collapse"
                    aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar"
                >
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <button
                            className="collapse-item"
                            onClick={() =>
                                (window.location.href = 'utilities-color.html')
                            }
                        >
                            Colors
                        </button>
                        <button
                            className="collapse-item"
                            onClick={() =>
                                (window.location.href = 'utilities-border.html')
                            }
                        >
                            Borders
                        </button>
                        <button
                            className="collapse-item"
                            onClick={() =>
                                (window.location.href =
                                    'utilities-animation.html')
                            }
                        >
                            Animations
                        </button>
                        <button
                            className="collapse-item"
                            onClick={() =>
                                (window.location.href = 'utilities-other.html')
                            }
                        >
                            Other
                        </button>
                    </div>
                </div>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider" />

            {/* Heading */}
            <div className="sidebar-heading">Addons</div>

            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <button
                    className="nav-link collapsed"
                    onClick={() => (window.location.href = '#collapsePages')}
                >
                    <FontAwesomeIcon icon={faFolder} />
                    <span>Pages</span>
                </button>
                <div
                    id="collapsePages"
                    className="collapse"
                    aria-labelledby="headingPages"
                    data-parent="#accordionSidebar"
                >
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <button
                            className="collapse-item"
                            onClick={() =>
                                (window.location.href = 'login.html')
                            }
                        >
                            Login
                        </button>
                        <button
                            className="collapse-item"
                            onClick={() =>
                                (window.location.href = 'register.html')
                            }
                        >
                            Register
                        </button>
                        <button
                            className="collapse-item"
                            onClick={() =>
                                (window.location.href = 'forgot-password.html')
                            }
                        >
                            Forgot Password
                        </button>
                        <div className="collapse-divider"></div>
                        <h6 className="collapse-header">Other Pages:</h6>
                        <button
                            className="collapse-item"
                            onClick={() => (window.location.href = '404.html')}
                        >
                            404 Page
                        </button>
                        <button
                            className="collapse-item"
                            onClick={() =>
                                (window.location.href = 'blank.html')
                            }
                        >
                            Blank Page
                        </button>
                    </div>
                </div>
            </li>

            {/* Nav Item - Charts */}
            <li className="nav-item">
                <button
                    className="nav-link"
                    onClick={() => (window.location.href = 'charts.html')}
                >
                    <FontAwesomeIcon icon={faChartArea} />
                    <span>Charts</span>
                </button>
            </li>

            {/* Nav Item - Tables */}
            <li className="nav-item">
                <button
                    className="nav-link"
                    onClick={() => (window.location.href = 'tables.html')}
                >
                    <FontAwesomeIcon icon={faTable} />
                    <span>Tables</span>
                </button>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />

            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
                <button
                    className="rounded-circle border-0"
                    id="sidebarToggle"
                ></button>
            </div>

            {/* Sidebar Message */}
            <div className="sidebar-card d-none d-lg-flex">
                <img
                    className="sidebar-card-illustration mb-2"
                    src="img/undraw_rocket.svg"
                    alt="..."
                />
                <p className="text-center mb-2">
                    <strong>SB Admin Pro</strong> is packed with premium
                    features, components, and more!
                </p>
                <a
                    className="btn btn-success btn-sm"
                    href="https://startbootstrap.com/theme/sb-admin-pro"
                >
                    Upgrade to Pro!
                </a>
            </div>
        </ul>
    );
};

export default CHeader;
