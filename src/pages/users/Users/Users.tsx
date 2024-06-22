import classes from './Users.module.scss'
import { PiCoinsDuotone, PiUsers, PiUsersThree } from 'react-icons/pi'
import { LiaCoinsSolid } from 'react-icons/lia'
import {Data} from "../../../../data.json"

const UserDetails = [
    {
        icon: PiUsers,
        iconColor: '#DF18FF',
        bgColor: "#f0d2f8",
        title: "USERS",
        total: Data.length
    },
    {
        icon: PiUsersThree,
        iconColor: '#5718FF',
        bgColor: "#d4c6f8",
        title: "ACTIVE USERS",
        total: Data.map((value) => value.status === "Active").reduce((total, nextNumber:any) => total + nextNumber, 0)
    },
    {
        icon: PiCoinsDuotone,
        iconColor: '#F55F44',
        bgColor: "#fccdc5",
        title: "USERS WITH LOANS",
        total: Data.length
    },
    {
        icon: LiaCoinsSolid,
        iconColor: '#FF3366',
        bgColor: "#facad6",
        title: "USERS WITH SAVINGS",
        total: Data.length
    },
]
const Users = () => {
  return (
    <section className={classes.users}>
        <div>
            <h2>Users</h2>
        </div>
        {Data.length > 0 ?
        <div className={classes.users__details}>
            {UserDetails.map((user, index) => (
                <div key={index} className={classes.users__individual_details}>
                    <div style={{backgroundColor: user.bgColor, width: "fit-content", borderRadius: '50%', padding: "8px",}}>
                        <user.icon color={user.iconColor} size={20}/>
                    </div>
                    <h3>{user.title}</h3>
                    <p>{user.total}</p>

                </div>
            ))}
        </div>
        :
        <div></div>
        }
    </section>
  )
}

export default Users