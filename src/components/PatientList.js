import React from 'react';

const PatientList = ({ patients }) => {
    return (
        <div>
            <h2>Patient List</h2>
            {patients.length === 0 ? (
                <p>No patients found.</p>
            ) : (
                <ul>
                    {patients.map((patient, index) => (
                        <li key={index}>
                            {patient.name} - Age: {patient.age} - Gender: {patient.gender}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PatientList;
