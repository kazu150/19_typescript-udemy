import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './data.json';
import TestComponent from './TestComponent';

type Users = typeof Data;
// ↑typeofを使うことで、json内のデータを型推定することができるから、そこがめちゃ強力

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <TestComponent text="hello from App" />
            </header>
        </div>
    );
};

export default App;
