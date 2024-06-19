import React from 'react'
import { BiUser } from 'react-icons/bi'
import { BsBag, BsHouseHeart } from 'react-icons/bs'
import { MdDashboard, MdOutlinePhonelinkSetup, MdOutlineSavings } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { RiArrowDropDownLine } from "react-icons/ri";
import classes from './Sidebar.module.scss'
import { IoLogOut } from 'react-icons/io5'
import { FaBriefcase, FaHouseChimney } from 'react-icons/fa6'
import { HiOutlineUsers } from 'react-icons/hi2'
import { PiScrollFill, PiUsersThreeFill } from 'react-icons/pi'
import { TbMoneybag, TbRosetteDiscount } from 'react-icons/tb'
import { FaCoins, FaRegHandshake, FaUserCheck, FaUserCog, FaUserTimes } from 'react-icons/fa'
import { GiReceiveMoney, GiSpiralTentacle } from 'react-icons/gi'
import { FcSettings, FcStatistics } from 'react-icons/fc'
import { VscSettings } from 'react-icons/vsc'
import { FiDivideCircle } from 'react-icons/fi'
import { AiOutlineAudit } from 'react-icons/ai'
import { LuLogOut } from 'react-icons/lu'
const SidebarContents = [
    {
        title: "CUSTOMERS",
        downline: [
            {
                icon: HiOutlineUsers,
                title: "Users",
                path: ""
            },
            {
                icon: PiUsersThreeFill,
                title: "Guarantors",
                path: ""
            },
            {
                icon: TbMoneybag,
                title: "Loans",
                path: ""
            },
            {
                icon: FaRegHandshake,
                title: "Decision Models",
                path: ""
            },
            {
                icon: MdOutlineSavings,
                title: "Savings",
                path: ""
            },
            {
                icon: GiReceiveMoney,
                title: "Loan Request",
                path: ""
            },
            {
                icon: FaUserCheck,
                title: "Whitelist",
                path: ""
            },
            {
                icon: FaUserTimes,
                title: "Karma",
                path: ""
            },
        ]
    },
    {
        title: "BUSINESSES",
        downline: [
            {
                icon: FaBriefcase,
                title: "Organization",
                path: ""
            },
            {
                icon: GiReceiveMoney,
                title: "Loan Products",
                path: ""
            },
            {
                icon: BsHouseHeart,
                title: "Savings Products",
                path: ""
            },
            {
                icon: FaCoins,
                title: "Fees and Charges",
                path: ""
            },
            {
                icon: MdOutlinePhonelinkSetup,
                title: "Transactions",
                path: ""
            },
            {
                icon: GiSpiralTentacle,
                title: "Services",
                path: ""
            },
            {
                icon: FaUserCog,
                title: "Service Account",
                path: ""
            },
            {
                icon: PiScrollFill,
                title: "Settlements",
                path: ""
            },
            {
                icon: FcStatistics,
                title: "Reports",
                path: ""
            },
        ]
    },
    {
        title: "SETTINGS",
        downline: [
            {
                icon: VscSettings,
                title: "Preferences",
                path: ""
            },
            {
                icon: TbRosetteDiscount,
                title: "Fees and Pricing",
                path: ""
            },
            {
                icon: AiOutlineAudit,
                title: "Audit Logs",
                path: ""
            },
            {
                icon: FcSettings,
                title: "System Messages",
                path: ""
            },
        ]
    },
   
]
const Sidebar = () => {
  return (
    <>
    <section className={classes.sidebar}>
        <div className={classes.sidebar__organization}>
            <FaBriefcase />
            <Link to={``}>Switch Organization</Link>
            <RiArrowDropDownLine/>
        </div>
        <div className={classes.sidebar__dashboard}>
            <FaHouseChimney />
            <h1>Dashboard</h1>
        </div>
        {SidebarContents.map((content, index) => (
            <div key={index}>
                <h2>{content.title}</h2>
                <div className={classes.sidebar__downlines}>
                    {content.downline.map((downlines, index) => (
                        <Link to={downlines.path} key={index} style={{borderLeft: downlines.title === 'Users' ? "3px solid #39CDCC": '', margin: downlines.title === 'Users' ? '0 -20px 0 -20px' : '', paddingLeft: downlines.title === 'Users' ? '20px': '', backgroundColor: downlines.title === 'Users' ? '#ecf7f7' :''}}>
                            <downlines.icon/>
                            <span>
                                {downlines.title}
                            </span>

                        </Link>
                    ))}
                </div>

            </div>
        ))}
        <div className={classes.sidebar__logout}>
            <Link to={``}>
                <LuLogOut style={{position: "absolute", }}/>
                <span>
                    Logout
                </span>
            </Link>

        </div>

        
    </section>
    <section className={classes.mobile_sidebar}>
        <div>
            <FaBriefcase />
            <RiArrowDropDownLine/>
        </div>
        <div >
            <FaHouseChimney />
        </div>
        {SidebarContents.map((content, index) => (
            <div key={index}>
                <div className={classes.sidebar__downlines}>
                    {content.downline.map((downlines, index) => (
                        <Link to={downlines.path} key={index} style={{borderLeft: downlines.title === 'Users' ? "3px solid #39CDCC": '', margin: downlines.title === 'Users' ? '0 -20px 0 -20px' : '', paddingLeft: downlines.title === 'Users' ? '20px': '', backgroundColor: downlines.title === 'Users' ? '#ecf7f7' :''}}>
                            <downlines.icon/>
                        </Link>
                    ))}
                </div>

            </div>
        ))}
        <div className={classes.sidebar__logout}>
            <Link to={``}>
                <LuLogOut style={{position: "absolute", }}/>
            </Link>

        </div>


    </section>
    </>
  )
}

export default Sidebar