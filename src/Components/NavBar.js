import React from 'react'
import AboutPage from './../pages/AboutPage'
import HomePage from './../pages/HomePage'
import DiscoverMoviesPage from './../pages/DiscoverMoviesPage'

export default function NavBar() {
    return (
        <div>
            <switch>
                <link to='/AboutPage'> About </link>
                <link to='/HomePage'> Home </link>
                <link to='/DiscoverMoviesPage'> Discover Movies </link>
            </switch>
        </div>
    )
}
