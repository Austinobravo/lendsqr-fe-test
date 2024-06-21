import React from 'react'
import { BiBell, BiSearch } from 'react-icons/bi'
import { MdOutlineArrowDropDown, MdOutlineClose } from "react-icons/md"
import { Link, useNavigate } from 'react-router-dom'
import Avatar from '../../assets/images/image 4.png'
import Logo from '../../assets/images/Group.svg' 
import classes from "./Navbar.module.scss"
import { CiMenuFries } from 'react-icons/ci'
import { UserData } from '../../../types/types'
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBriefcase, FaHouseChimney } from 'react-icons/fa6'
import { LuLogOut } from 'react-icons/lu'
import { SidebarContents } from '../../../global/content'


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false)
    const [isThereUserData, setIsThereUserData] = React.useState<boolean>(true)
    const [userDetails, setUserDetails] = React.useState({} as UserData | null)
    const pathname = window.location.pathname
    const navigate = useNavigate()

    React.useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('userDetails') as string)
        setIsThereUserData(!!data)


    },[isThereUserData])
    React.useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('userDetails') as string)
        if(isThereUserData){
            setUserDetails(data)
        }

    },[isThereUserData])

    const Logout = () => {
        localStorage.removeItem('userDetails')
        navigate("/")
        location.reload()
      }
  return (
    <section className={classes.nav}>
        <div className={classes.nav__logo_form}>
            <Link to={`/`} className={classes.nav__logo}>
                <img src={Logo} width={150} alt='logo'/>
            </Link>
            <div className={classes.nav__form}>
                <form>
                    <div>
                        <input type='text' name='search' id='search' placeholder='Search for anything.'/>
                    </div>
                    <button>
                        <BiSearch color='#fff' size={15}/>
                    </button>
                </form>
            </div>
        </div>
        <div className={classes.nav__personal_details}>
            <div>
                <Link to={``}>Docs</Link>
            </div>
            <div>
                <BiBell size={25}/>
            </div>
            <div className={classes.nav__personal_details_avatar}>
                <img src={Avatar} alt='avatar'/>
                <h2>
                    {userDetails?.username ?
                        userDetails.username
                        :
                        "Anonymous"    
                    }
                </h2>
                <MdOutlineArrowDropDown style={{cursor: 'pointer'}}/>
            </div>
        </div>
        <div className={classes.nav__toggle}>
            {!isMenuOpen && 
                <CiMenuFries size={30} onClick={()=>setIsMenuOpen(!isMenuOpen)}/>
            }
        </div>

        {isMenuOpen && 
            <div className={`${classes.modal_overlay} ${classes.display_properly}`}>
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
                                    <Link to={downlines.path} key={index} onClick={()=>setIsMenuOpen(!isMenuOpen)}  style={{borderLeft: pathname.includes(downlines.path) ? "3px solid #39CDCC": '', margin: pathname.includes(downlines.path) ? '0 -20px 0 -20px' : '', paddingLeft: pathname.includes(downlines.path) ? '20px': '', backgroundColor: pathname.includes(downlines.path) ? '#ecf7f7' :''}}>
                                        <downlines.icon/>
                                        <span>
                                            {downlines.title}
                                        </span>

                                    </Link>
                                ))}
                            </div>

                        </div>
                    ))}
                    <div className={classes.sidebar__logout} onClick={Logout}>
                            <LuLogOut style={{position: "absolute", }}/>
                            <span>
                                Logout
                            </span>
                    </div>

                    
                </section>
                <div/>
                <div className={classes.display_properly__toggle}>
                    <MdOutlineClose size={30} onClick={()=>setIsMenuOpen(!isMenuOpen)} />
                </div>

            </div>
        }

        
    </section>
  )
}

export default Navbar