import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Clinic Management System</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/patients">Patients</Link>
                <Link to="/add-patient">Add Patient</Link>
            </nav>
        </header>
    );
};

export default Header;
