import React from 'react'
import { IoFilter } from 'react-icons/io5'
import classes from './UsersTable.module.scss'
import { BsEye, BsThreeDotsVertical } from 'react-icons/bs'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import FiltersForm from '../FiltersForm/FiltersForm'
import { BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { TbUserCheck, TbUserX } from 'react-icons/tb'

const TableContents = [
    {
        organization: 'Lendsqr',
        username: 'Adedeji',
        email: 'adedeji@lendsqr.com',
        phone_number: '080973666373',
        date_joined: new Date().toUTCString().slice(0,-4),
        status: 'Inactive'
    },
    {
        organization: 'Lendsqr',
        username: 'Adedeji',
        email: 'adedeji@lendsqr.com',
        phone_number: '080973666373',
        date_joined: new Date().toUTCString().slice(0,-4),
        status: 'Pending'
    },
    {
        organization: 'Lendsqr',
        username: 'Adedeji',
        email: 'adedeji@lendsqr.com',
        phone_number: '080973666373',
        date_joined: new Date().toUTCString().slice(0,-4),
        status: 'Blacklisted'
    },
    {
        organization: 'Lendsqr',
        username: 'Adedeji',
        email: 'adedeji@lendsqr.com',
        phone_number: '080973666373',
        date_joined: new Date().toUTCString().slice(0,-4),
        status: 'Inactive'
    },
    {
        organization: 'Lendsqr',
        username: 'Adedeji',
        email: 'adedeji@lendsqr.com',
        phone_number: '080973666373',
        date_joined: new Date().toUTCString().slice(0,-4),
        status: 'Active'
    },
]
const UsersTable = () => {
    const [isFormOpen, setIsFormOpen] = React.useState<boolean>(false)
    const [isCardFilterOpen, setIsCardFilterOpen] = React.useState<boolean>(false)
  return (
    <section className={classes.users_table}>
        <table>
                <thead>
                    <tr>
                        <th>ORGANIZATION <span onClick={()=> setIsFormOpen(!isFormOpen)}><IoFilter size={15}/></span></th>
                        <th>USERNAME <span onClick={()=> setIsFormOpen(!isFormOpen)}><IoFilter size={15}/></span></th>
                        <th>EMAIL <span onClick={()=> setIsFormOpen(!isFormOpen)}><IoFilter size={15}/></span></th>
                        <th>PHONE NUMBER <span onClick={()=> setIsFormOpen(!isFormOpen)}><IoFilter size={15}/></span></th>
                        <th>DATE JOINED <span onClick={()=> setIsFormOpen(!isFormOpen)}><IoFilter size={15}/></span></th>
                        <th>STATUS <span onClick={()=> setIsFormOpen(!isFormOpen)}><IoFilter size={15}/></span></th>
                        <th></th>
                    </tr>
                </thead>
            
                <tbody>
                    {TableContents.map((content, index) => (
                        <tr key={index}>
                            <td>{content.organization}</td>
                            <td>{content.username}</td>
                            <td>{content.email}</td>
                            <td>{content.phone_number}</td>
                            <td>{content.date_joined}</td>
                            <td><span  className={content.status === "Inactive" ? classes.users_table__status_inactive: content.status === "Pending" ? classes.users_table__status_pending : content.status === "Blacklisted" ? classes.users_table__status_blacklisted : classes.users_table__status_active }>{content.status}</span></td>
                            <td onClick={()=>setIsCardFilterOpen(!isCardFilterOpen)}><BsThreeDotsVertical style={{cursor: "pointer"}} /></td>
                        </tr>

                    ))}
                </tbody>
        </table>
        <div className={classes.filter_pagination}>
            <div className={classes.filter_pagination__filter}>
                <p>Showing </p>
                <form>
                    <select>
                        <option>100</option>
                    </select>
                </form>
                <p>out of 100</p>
            </div>
            <div className={classes.filter_pagination__pagination}>
                <div>
                    <IoIosArrowBack />
                </div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>
                        <HiOutlineDotsHorizontal />
                    </li>
                    <li>15</li>
                    <li>16</li>
                </ul>
                <div>
                    <IoIosArrowForward />
                </div>
            </div>
        </div>

        {/* Modals */}
        {isFormOpen && 
            <div>
                <FiltersForm/>
            </div>
        }

        {isCardFilterOpen && 
            <div className={classes.card_filter}>
                <div>
                    <BsEye/>
                    <Link to={`/dashboard/grace`}> View Details</Link>
                </div>
                <div>
                    <TbUserX />
                    <Link to={``}> Blacklist User</Link>
                </div>
                <div>
                    <TbUserCheck/>
                    <Link to={``}> Activate User</Link>
                </div>

            </div>
        }


    </section>
  )
}

export default UsersTable