import React from 'react';
import './Imassage.css'
import Chat from './sub-component/Chat';
import Sidebar from './sub-component/Sidebar';

const Imassage = () => {
    return (
        <div className="imassage">
            <Sidebar />
            <Chat/> 
        </div>
    );
};

export default Imassage;