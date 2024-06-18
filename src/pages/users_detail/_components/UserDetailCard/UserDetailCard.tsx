import React from 'react'
import { BiStar } from 'react-icons/bi'
import { HiOutlineArrowLongLeft } from 'react-icons/hi2'
import { MdOutlineStar, MdOutlineStarBorder } from 'react-icons/md'
import { Link } from 'react-router-dom'
import classes from './UserDetailCard.module.scss'
const NavLink = [
    {
        title: 'General Details',
        path: ''
    },
    {
        title: 'Documents',
        path: '/documents'
    },
    {
        title: 'Bank Details',
        path: '/bank'
    },
    {
        title: 'Loans',
        path: '/loans'
    },
    {
        title: 'Savings',
        path: '/savings'
    },
    {
        title: 'App and System',
        path: '/system'
    },

]
const UserDetailCard = () => {

  return (
    <section className={classes.user_detail}>
        <div className={classes.user_detail__navigate_back}>
            <HiOutlineArrowLongLeft />
            <Link to={`/dashboard`}>Back to Users</Link>
        </div>
        <div className={classes.user_detail__button_heading}>
            <h2>User Details</h2>
            <div>
                <button type='button'>BLACKLIST USER</button>
                <button type='button'>ACTIVATE USER</button>
            </div>
        </div>
        <div>
            <div>
                <img src='' alt='avatar'/>
                <div>
                    <h2>Grace Effiom</h2>
                    <p>LQHDEHDISJ8</p>
                </div>
                <div>
                    <h3>User's Tier</h3>
                    <div>
                        <MdOutlineStar />
                        <MdOutlineStarBorder />
                        <MdOutlineStarBorder />
                    </div>
                </div>
                <div>
                    <h3>N200,000.00</h3>
                    <p>94454938445/Providus Bank</p>
                </div>
            </div>
            <ul>
                <li>
                    {NavLink.map((link, index) => (
                        <Link key={index} to={`/dashboard/grace/${link.path}`}>
                            {link.title}
                        </Link>

                    ))}
                </li>
                
            </ul>
        </div>
    </section>
  )
}

export default UserDetailCard