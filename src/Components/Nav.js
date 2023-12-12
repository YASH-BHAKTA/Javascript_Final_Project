import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <div>
            <ul className='nav-ul'>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/Add_Student">Add Student</Link></li>
                <li><Link to="/View_Student_List">View Student List</Link></li>
            </ul>
        </div>
    )
}

export default Nav;