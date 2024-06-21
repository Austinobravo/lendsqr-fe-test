import { Link } from 'react-router-dom'
import { RiArrowDropDownLine } from "react-icons/ri";
import classes from './MobileSidebar.module.scss'

import { FaBriefcase, FaHouseChimney } from 'react-icons/fa6'
import { LuLogOut } from 'react-icons/lu'
import { SidebarContents } from '../../../../../global/content';


const MobileSidebar = () => {
  const pathname = window.location.pathname

  return (
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
                    <Link to={downlines.path} key={index} style={{borderLeft: pathname.includes(downlines.path) ? "3px solid #39CDCC": '', margin: pathname.includes(downlines.path) ? '0 -20px 0 -20px' : '', paddingLeft: pathname.includes(downlines.path) ? '20px': '', backgroundColor: pathname.includes(downlines.path) ? '#ecf7f7' :''}}>
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
  )
}

export default MobileSidebar