
import classes from './UserFullDetail.module.scss'
import { guarantorType, UserData } from '../../../../../types/types'

const UserFullDetail = ({userDetails}: {userDetails: UserData | null}) => {
  return (
    <section className={classes.user_full_detail}>
        <div>
            <h3>Personal Information</h3>
            <div className={classes.user_full_detail__personal}>
                <div>
                    <h4>FULL NAME</h4>
                    <p>{userDetails?.fullName}</p>
                </div>
                <div>
                    <h4>PHONE NUMBER</h4>
                    <p>{userDetails?.phone}</p>
                </div>
                <div>
                    <h4>EMAIL ADDRESS</h4>
                    <p>{userDetails?.email}</p>
                </div>
                <div>
                    <h4>BVN</h4>
                    <p>{userDetails?.bvn}</p>
                </div>
                <div>
                    <h4>GENDER</h4>
                    <p>{userDetails?.gender}</p>
                </div>
                <div>
                    <h4>MARITAL STATUS</h4>
                    <p>{userDetails?.maritalStatus}</p>
                </div>
                <div>
                    <h4>CHILDREN</h4>
                    <p>{userDetails?.children}</p>
                </div>
                <div>
                    <h4>TYPE OF RESIDENCE</h4>
                    <p>{userDetails?.typeOfResidence}</p>
                </div>
            </div>
        </div>
        <div>
            <h3>Education and Employment</h3>
            <div className={classes.user_full_detail__education}>
                <div>
                    <h4>LEVEL OF EDUCATION</h4>
                    <p>{userDetails?.levelOfEducation}</p>
                </div>
                <div>
                    <h4>EMPLOYMENT STATUS</h4>
                    <p>{userDetails?.employmentStatus}</p>
                </div>
                <div>
                    <h4>SECTOR OF EMPLOYMENT</h4>
                    <p>{userDetails?.sectorOfEmployment}</p>
                </div>
                <div>
                    <h4>DURATION OF EMPLOYMENT</h4>
                    <p>{userDetails?.durationOfEmployment}</p>
                </div>
                <div>
                    <h4>OFFICE EMAIL</h4>
                    <p>{userDetails?.officeEmail}</p>
                </div>
                <div>
                    <h4>MONTHLY INCOME</h4>
                    <p>N200,000.00 - N400,000.00 {userDetails?.monthlyPay}</p>
                </div>
                <div>
                    <h4>LOAN REPAYMENT</h4>
                    <p>{userDetails?.loanRepayment}</p>
                </div>
            </div>
        </div>
        <div>
            <h3>Socials</h3>
            <div className={classes.user_full_detail__socials}>
                <div>
                    <h4>TWITTER</h4>
                    <p>{userDetails?.twitter}</p>
                </div>
                <div>
                    <h4>FACEBOOK</h4>
                    <p>{userDetails?.facebook}</p>
                </div>
                <div>
                    <h4>INSTAGRAM</h4>
                    <p>{userDetails?.instagram}</p>
                </div>
            </div>
        </div>
        <div>
            <h3>Guarantor</h3>
            {userDetails?.guarantor?.map((guarantorDetails: guarantorType, index: number) => (
                <div key={index} className={classes.user_full_detail__guarantor}>
                    <div>
                        <h4>FULL NAME</h4>
                        <p>{guarantorDetails.name}</p>
                    </div>
                    <div>
                        <h4>PHONE NUMBER</h4>
                        <p>{guarantorDetails.phone}</p>
                    </div>
                    <div>
                        <h4>EMAIL ADDRESS</h4>
                        <p>{guarantorDetails.email}</p>
                    </div>
                    <div>
                        <h4>RELATIONSHIP</h4>
                        <p>{guarantorDetails.relationship}</p>
                    </div>
                </div>

            ))} 
        </div>
        <div>
        {userDetails?.guarantor?.map((guarantorDetails: guarantorType, index: number) => (
            <div key={index} className={classes.user_full_detail__just_guarantor}>
                <div>
                    <h4>FULL NAME</h4>
                    <p>{guarantorDetails.name}</p>
                </div>
                <div>
                    <h4>PHONE NUMBER</h4>
                    <p>{guarantorDetails.phone}</p>
                </div>
                <div>
                    <h4>EMAIL ADDRESS</h4>
                    <p>{guarantorDetails.email}</p>
                </div>
                <div>
                    <h4>RELATIONSHIP</h4>
                    <p>{guarantorDetails.relationship}</p>
                </div>
            </div>
        ))} 
        </div>
    </section>
  )
}

export default UserFullDetail