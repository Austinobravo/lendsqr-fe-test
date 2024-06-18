import React from 'react'
import { BiBell, BiSearch } from 'react-icons/bi'
import { MdOutlineArrowDropDown } from "react-icons/md"
import { Link } from 'react-router-dom'
import Avatar from '../../pages/dashboard/assets/image 4.png'
import Logo from '../../pages/login/asset/Group.svg' 
import classes from "./Navbar.module.scss"

const Navbar = () => {
  return (
    <section className={classes.nav}>
        <div className={classes.nav__logo_form}>
            <div className={classes.nav__logo}>
                <img src={Logo} width={150} alt='logo'/>
            </div>
            <div className={classes.nav__form}>
                <form>
                    <div>
                        <input type='text' name='search' id='search' placeholder='Search for anything'/>
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
                <h2>Adedeji</h2>
                <MdOutlineArrowDropDown/>
            </div>
        </div>

        
    </section>
  )
}

export default Navbar