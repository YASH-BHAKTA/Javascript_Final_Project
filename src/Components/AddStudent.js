import React from 'react'
import { useState } from 'react';

const AddStudent = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const CollectData = async () => {
        console.warn(fname, lname);
        let result = await fetch("http://localhost:5000/add", {
            method: 'post',
            body: JSON.stringify({ fname, lname }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json();
        console.warn(result)
        setFname("");
        setLname("");
        alert("data inserted successfully");
    }

    return (
        <div>
            <h1>
                Add Student
            </h1>
            <input className='inputbox' type='text' value={fname} onChange={(e) => setFname(e.target.value)} placeholder='First Name' /><br />
            <input className='inputbox' type='text' value={lname} onChange={(e) => setLname(e.target.value)} placeholder='Last Name' /><br />
            <button onClick={CollectData} className='Button' type='button' >Add Student</button>

        </div>
    )
};

export default AddStudent;