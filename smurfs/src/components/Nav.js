import React from 'react'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return(
        <div>
            <button>
            <NavLink exact to='/'>Smurf Population</NavLink>
            </button>
            <NavLink exact to='/AddSmurf'>Add Smurf</NavLink>
        </div>
    )
}

export default Nav;