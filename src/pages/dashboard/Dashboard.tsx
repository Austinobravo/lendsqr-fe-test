
import classes from './Dashboard.module.scss'
import Navbar from '../../components/Nav/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'

const Dashboard = () => {
  return (
    <section className={classes.dashboard}>
        <Navbar/>
        <div>
            <Sidebar/>
        </div>
        <div>
            <Outlet/>
        </div>
    </section>
  )
}

export default Dashboard