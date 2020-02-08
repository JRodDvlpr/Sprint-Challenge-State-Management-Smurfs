import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from 'antd'; 

const Nav = () => {
    return(
        <div>
            <Button type='primary'>
            <NavLink exact to='/'>Smurf Population</NavLink>
            </Button>
            <Button type='primary'>
            <NavLink exact to='/AddSmurf'>Add Smurf</NavLink>
            </Button>
        </div>
    )
}

export default Nav;