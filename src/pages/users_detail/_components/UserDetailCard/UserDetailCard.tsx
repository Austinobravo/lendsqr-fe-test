import React from 'react'
import { HiOutlineArrowLongLeft } from 'react-icons/hi2'
import { MdOutlineStar, MdOutlineStarBorder } from 'react-icons/md'
import { Link } from 'react-router-dom'
import classes from './UserDetailCard.module.scss'
import Avatar from '../../../../assets/images/avatar.png'
import UserFullDetail from '../UserFullDetail/UserFullDetail'
import { UserData } from '../../../../../types/types'

const NavLink = [
    {
        title: 'General Details',
        path: '/'
    },
    {
        title: 'Documents',
        path: 'documents'
    },
    {
        title: 'Bank Details',
        path: 'bank'
    },
    {
        title: 'Loans',
        path: 'loans'
    },
    {
        title: 'Savings',
        path: 'savings'
    },
    {
        title: 'App and System',
        path: 'system'
    },

]
const UserDetailCard = () => {
    const [pathname, setPathname] = React.useState<string>('/')
    const [userDetails, setUserDetails] = React.useState({} as UserData | null)
    const [isThereUserData, setIsThereUserData] = React.useState<boolean>(true)
    const username = window.location.pathname.split('/').pop()

    React.useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('userDetails') as string)
        console.log("first data",data)
        setIsThereUserData(!!data)


    },[username])
    React.useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('userDetails') as string)
        console.log("second data",data)
       
        if(isThereUserData){
            setUserDetails(data)
        }

    },[username])


  return (
    <section className={classes.user_detail}>
        <div className={classes.user_detail__navigate_back}>
            <HiOutlineArrowLongLeft />
            <Link to={`/dashboard`}>Back to Users</Link>
        </div>
        {isThereUserData && userDetails?.username === username ? 
            <div className={classes.user_detail__button_heading}>
                <h2>User Details</h2>
                <div>
                    <button type='button' className={classes.user_detail__blacklist}>BLACKLIST USER</button>
                    <button type='button' className={classes.user_detail__activate}>ACTIVATE USER</button>
                </div>
            </div>
        :
        <div className={classes.user_detail__button_heading}>
            <h2>User Details</h2>

        </div>
        }
        <div className={classes.user_card}>
            {isThereUserData && userDetails?.username === username ? 
                <div className={classes.user_card__details}>
                    <div className={classes.user_card__details_img}>
                        <img src={Avatar} alt='avatar'/>
                    </div>
                    <div className={classes.user_card__details_name}>
                        <h2>{userDetails?.fullName}</h2>
                        <p>{userDetails?._id}</p>
                    </div>
                    <div className={classes.user_card__details_rating}>
                        <h3>User's Tier</h3>
                        <div>
                            <MdOutlineStar fill='#E9B200' />
                            <MdOutlineStarBorder  color='#E9B200'/>
                            <MdOutlineStarBorder  color='#E9B200'/>
                        </div>
                    </div>
                    <div className={classes.user_card__details_amount}>
                        <h3>N200,000.00</h3>
                        <p>94454938445/Providus Bank</p>
                    </div>
                </div>
            : 
                <p className={classes.user_card__not_found}>No data found for {username}</p>
            }
            {isThereUserData && userDetails?.username === username && 
                <ul>
                    <li>
                        {NavLink.map((link, index) => (
                            <Link key={index} to={`/dashboard/users/${userDetails?.username}/${link.path === '/' ? "" : link.path}`} style={{ color: link.path.includes(pathname) ? '#39CDCC' : ''}} onClick={()=> setPathname(link.path)}>
                                {link.title}
                                
                                {link.path.includes(pathname) &&
                                    <hr/>
                                }
                            </Link>

                        ))}
                    </li>
                    
                </ul>
            }
        </div>
        {isThereUserData && userDetails?.username === username && 
        <div>
            <UserFullDetail userDetails={userDetails}/>
        </div>
        }
    </section>
  )
}

export default UserDetailCard