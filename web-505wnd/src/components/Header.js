import React from 'react'
import Nav from './Nav'
import '../scss/components/header.scss'

export default function Header(){
    return (
        <div className='header'>
        {/* <div className='header__title'>505 Wine and Dine</div> */}
            <div>
                <Nav />
            </div>
        <div>

        </div>
        </div>
    )
}