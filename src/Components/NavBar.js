import React from 'react'
import AboutPage from './../pages/AboutPage'
import HomePage from './../pages/HomePage'
import DiscoverMoviesPage from './../pages/DiscoverMoviesPage'
import { Switch, Route, Link, NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <h1>NavBar</h1>
            <NavLink exact to='/' activeStyle={{fontWeight:'bold',color:'red'}}> Home </NavLink>
            <NavLink to='/about' activeStyle={{fontWeight:'bold',color:'red'}}> About </NavLink>
            <NavLink to='/discover' activeStyle={{fontWeight:'bold',color:'red'}}> Discover Movies </NavLink>
        </div>
    )
}
