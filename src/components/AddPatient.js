import React, { useState } from 'react';

const AddPatient = ({ addPatient }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !age || !gender) return;
        addPatient({ name, age, gender });
        setName('');
        setAge('');
        setGender('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Patient</h2>
            <input
                type="text"
                placeholder="Patient Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
            />
            <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <button type="submit">Add Patient</button>
        </form>
    );
};

export default AddPatient;
