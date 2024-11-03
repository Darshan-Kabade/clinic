import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AddPatient from './components/AddPatient';
import PatientList from './components/PatientList';
import clinicImage from './clinic.jpg'; // Adjust the path as needed


const App = () => {
    const [patients, setPatients] = useState([]);

    const addPatient = (patient) => {
        setPatients([...patients, patient]);
    };

    return (
        <Router>
            <Header />
            <Routes>
                <Route 
                    path="/" 
                    element={
                        <div style={{ textAlign: 'center', padding: '20px' }}>
                            <h2>Welcome to the Clinic Management System</h2>
                            <p>
                                Our clinic is dedicated to providing the best healthcare services 
                                to our community. We have a team of experienced medical professionals 
                                ready to assist you with your health needs.
                            </p>
                            <img 
                              src={clinicImage} 
                              alt="Clinic" 
                              style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '8px' }}
                            />

                            <p>
                                We offer a range of services including general check-ups, 
                                specialist consultations, and more. 
                                Your health is our priority!
                            </p>
                        </div>
                    } 
                />
                <Route path="/patients" element={<PatientList patients={patients} />} />
                <Route path="/add-patient" element={<AddPatient addPatient={addPatient} />} />
            </Routes>
        </Router>
    );
};

export default App;
