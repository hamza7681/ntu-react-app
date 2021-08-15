import React from 'react'
import MainNavbar from './Navbar';
import TopBar from './TopBar';
import "./style.css"

function Header() {
    return (
        <div>
            <TopBar/>
            <MainNavbar/>
        </div>
    )
}

export default Header
