import React from 'react';
import CHeader from '../components/header/header';
import LogoutButton from '../components/logoutButton/logoutButton';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Home: React.FC = () => {
    return (
        <>
            <CHeader />
            <LogoutButton />
        </>
    );
};

export default Home;
