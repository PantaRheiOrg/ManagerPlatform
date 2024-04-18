import React from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Footer from '../components/footer/footer';

const Home: React.FC = () => {
    //we need this for the future to hide option depending on users permissons
    const navItems = [
        { href: '/venue', text: 'Venue', icon: '#noIcon' },
        { href: '/menus', text: 'Menus', icon: '#noIcon' },
        { href: '/items', text: 'Items', icon: '#noIcon' },
        { href: '/location', text: 'Location', icon: '#noIcon' },
    ];
    return (
        <div className="d-flex">
            <Sidebar navItems={navItems} />
            <div className="container-fluid">
                <div>
                    <h1>Main Content</h1>
                    <p>This is the main content area of the page.</p>
                    <p>You can add more elements here to fill out the page.</p>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;
