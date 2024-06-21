// import "./styles/Login.module.scss"
import React from "react"
import Logo from '../../assets/images/Group.svg'
import Banner from '../../assets/images/pablo-sign-in 1.svg'
import { Link } from "react-router-dom"
import classes from "./Login.module.scss"

const Login = () => {
  const [isPasswordShown, setIsPasswordShown] = React.useState<boolean>(false)
  return (
    <section className={classes.container}>
      <div className={classes.flex}>
        <div className={classes.images}>
          <Link to={`/`}>
            <img src={Logo} alt="Logo" width={150} className={classes.logo} />
          </Link>
            <img src={Banner} alt="Banner" className={classes.banner}/>
        </div>
        <div className={classes.login_form}>
            <div className={classes.login_form__text}>
              <h2 className={classes.login_form__heading}>Welcome!</h2>
              <p className={classes.login_form__paragraph}>Enter details to login</p> 
            </div>
            <form>
              <div className={classes.login_form__input}>
                <input type="email" name="email_address" id="email_address" placeholder="Email"/>
              </div>
              <div className={classes.login_form__input}>
                <input type={isPasswordShown ? 'text' : 'password'} name="password" id="password" placeholder="Password"/>
                <span onClick={()=>setIsPasswordShown(!isPasswordShown)} className={classes.login_form__span}>
                  {isPasswordShown 
                  ?
                    "HIDE"
                  :
                    "SHOW"
                }
                </span>
              </div>
              <div className={classes.login_form__forgot_password}>
                <Link to={``}>FORGOT PASSWORD?</Link>
              </div>
              <div>
                <button type="submit">LOG IN</button>
              </div>
            </form>
          </div>
       

      </div>
    </section>
  )
}

export default Login