import React from 'react'
import { BiUser } from 'react-icons/bi'
import { BsBag } from 'react-icons/bs'
import { MdDashboard } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { RiArrowDropDownLine } from "react-icons/ri";
import classes from './Sidebar.module.scss'
const SidebarContents = [
    {
        title: "CUSTOMERS",
        downline: [
            {
                icon: BiUser,
                title: "Users",
                path: ""
            },
            {
                icon: BiUser,
                title: "Guarantors",
                path: ""
            },
            {
                icon: BiUser,
                title: "Loans",
                path: ""
            },
            {
                icon: BiUser,
                title: "Decision Models",
                path: ""
            },
            {
                icon: BiUser,
                title: "Savings",
                path: ""
            },
            {
                icon: BiUser,
                title: "Loan Request",
                path: ""
            },
            {
                icon: BiUser,
                title: "Whitelist",
                path: ""
            },
            {
                icon: BiUser,
                title: "Karma",
                path: ""
            },
        ]
    },
    {
        title: "BUSINESSES",
        downline: [
            {
                icon: BiUser,
                title: "Organization",
                path: ""
            },
            {
                icon: BiUser,
                title: "Loan Products",
                path: ""
            },
            {
                icon: BiUser,
                title: "Savings Products",
                path: ""
            },
            {
                icon: BiUser,
                title: "Fees and Charges",
                path: ""
            },
            {
                icon: BiUser,
                title: "Transactions",
                path: ""
            },
            {
                icon: BiUser,
                title: "Services",
                path: ""
            },
            {
                icon: BiUser,
                title: "Service Account",
                path: ""
            },
            {
                icon: BiUser,
                title: "Settlements",
                path: ""
            },
            {
                icon: BiUser,
                title: "Reports",
                path: ""
            },
        ]
    },
    {
        title: "SETTINGS",
        downline: [
            {
                icon: BiUser,
                title: "Preferences",
                path: ""
            },
            {
                icon: BiUser,
                title: "Fees and Pricing",
                path: ""
            },
            {
                icon: BiUser,
                title: "Audit Logs",
                path: ""
            },
        ]
    },
   
]
const Sidebar = () => {
  return (
    <section className={classes.sidebar}>
        <div className={classes.sidebar__organization}>
            <BsBag/>
            <Link to={``}>Switch Organization</Link>
            <RiArrowDropDownLine/>
        </div>
        <div className={classes.sidebar__dashboard}>
            <MdDashboard/>
            <h1>Dashboard</h1>
        </div>
        {SidebarContents.map((content, index) => (
            <div key={index}>
                <h2>{content.title}</h2>
                <div className={classes.sidebar__downlines}>
                    {content.downline.map((downlines, index) => (
                        <Link to={downlines.path} key={index}>
                            <downlines.icon/>
                            <span>
                                {downlines.title}
                            </span>

                        </Link>
                    ))}
                </div>

            </div>
        ))}
        
    </section>
  )
}

export default Sidebar