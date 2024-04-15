import React from 'react';
import './App.css';
import CButton from './components/button/button';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App() {
    const handleClick = (): void => {
        console.log('click');
    };
    return (
        <div className="App">
            <CButton label="Ola" onClick={handleClick} />
        </div>
    );
}

export default App;
