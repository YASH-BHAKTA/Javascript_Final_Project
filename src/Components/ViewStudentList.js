import React, { useEffect, useState } from "react";
const ViewStudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getStudents();
    })

    const getStudents = async () => {
        let result = await fetch('http://localhost:5000/students');
        result = await result.json();
        setStudents(result);
    }
    console.warn("students", students)

    return (
        <div className='studentlist'>
            <h1>
                This is the tab of student list
            </h1>
            <h3>
                Student List
            </h3>

            <ul>
                <li>No.</li>
                <li>fname</li>
                <li>lname</li>

            </ul>
            {
                students.map((item,index) =>
                    <ul>
                        <li>{index + 1}</li>
                        <li>{item.fname}</li>
                        <li>{item.lname}</li>

                    </ul>
                )
            }
        </div>
    )
}

export default ViewStudentList;