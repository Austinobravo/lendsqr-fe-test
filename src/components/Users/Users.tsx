import classes from './Users.module.scss'
import { PiCoinsDuotone, PiUsers, PiUsersThree } from 'react-icons/pi'
import { LiaCoinsSolid } from 'react-icons/lia'
const UserDetails = [
    {
        icon: PiUsers,
        iconColor: '#DF18FF',
        bgColor: "#f0d2f8",
        title: "USERS",
        total: "2,453"
    },
    {
        icon: PiUsersThree,
        iconColor: '#5718FF',
        bgColor: "#d4c6f8",
        title: "ACTIVE USERS",
        total: "2,453"
    },
    {
        icon: PiCoinsDuotone,
        iconColor: '#F55F44',
        bgColor: "#fccdc5",
        title: "USERS WITH LOANS",
        total: "12,453"
    },
    {
        icon: LiaCoinsSolid,
        iconColor: '#FF3366',
        bgColor: "#facad6",
        title: "USERS WITH SAVINGS",
        total: "102,453"
    },
]
const Users = () => {
  return (
    <section className={classes.users}>
        <div>
            <h2>Users</h2>
        </div>
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
    </section>
  )
}

export default Users