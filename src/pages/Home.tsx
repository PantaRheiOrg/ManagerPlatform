import React from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Footer from '../components/footer/footer';
import Main from '../components/main/main';

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
            <div className="flex-grow-1">
                <div
                    className="container-fluid"
                    style={{ paddingLeft: '250px' }}
                >
                    <Main></Main>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Home;
