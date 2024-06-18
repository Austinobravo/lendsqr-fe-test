import React from 'react'
import { BiUser } from 'react-icons/bi'
import classes from './Users.module.scss'
const UserDetails = [
    {
        icon: BiUser,
        title: "USERS",
        total: 2453
    },
    {
        icon: BiUser,
        title: "ACTIVE USERS",
        total: 2453
    },
    {
        icon: BiUser,
        title: "USERS WITH LOANS",
        total: 12453
    },
    {
        icon: BiUser,
        title: "USERS WITH SAVINGS",
        total: 102453
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
                    <div>
                        <user.icon/>
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