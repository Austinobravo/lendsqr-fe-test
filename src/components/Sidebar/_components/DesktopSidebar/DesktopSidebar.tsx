import { Link } from 'react-router-dom'
import { RiArrowDropDownLine } from "react-icons/ri";
import classes from './DesktopSidebar.module.scss'

import { FaBriefcase, FaHouseChimney } from 'react-icons/fa6'
import { LuLogOut } from 'react-icons/lu'
import {SidebarContents} from '../../../../../global/content';


const DesktopSidebar = () => {
  const pathname = window.location.pathname
  console.log("pathname",pathname)
  return (
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
                    <Link to={downlines.path} key={index} style={{borderLeft: pathname.includes(downlines.path)  ? "3px solid #39CDCC": '', margin: pathname.includes(downlines.path) ? '0 -20px 0 -20px' : '', paddingLeft: pathname.includes(downlines.path) ? '20px': '', backgroundColor: pathname.includes(downlines.path) ? '#ecf7f7' :''}}>
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
  )
}

export default DesktopSidebar