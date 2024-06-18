import React from 'react'
import classes from './styles/Dashboard.module.scss'
import Navbar from '../../components/Nav/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import Users from '../../components/Users/Users'
const Dashboard = () => {
  return (
    <section className={classes.dashboard}>
        <Navbar/>
        <div>
            <Sidebar/>
        </div>
        <div>
            <Users/>
        </div>
        {/* <Outlet/> */}
    </section>
  )
}

export default Dashboard