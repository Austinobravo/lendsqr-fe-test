import React from 'react'
import classes from './FiltersForm.module.scss'

const FiltersForm = () => {
  return (
    <div className={classes.filter_form}>
        <form>
            <div>
                <label htmlFor='organization'>Organization</label>
                <select name='status' id='status'>
                    <option>Select</option>
                </select>
            </div>
            <div>
                <label htmlFor='username'>Username</label>
                <input type="text" id='username' name='username' placeholder='User'/>
            </div>
            <div>
                <label htmlFor='email_address'>Email</label>
                <input type="email" id='email_address' name='email_address' placeholder='Email'/>
            </div>
            <div>
                <label htmlFor='date'>Date</label>
                <input type="date" id='date' name='date' placeholder='Date'/>
            </div>
            <div>
                <label htmlFor='phone'>Phone</label>
                <input type="tel" id='phone' name='phone' placeholder='Phone Number'/>
            </div>
            <div>
                <label htmlFor='status'>Status</label>
                <select name='status' id='status'>
                    <option>Select</option>
                </select>
            </div>
            <span className={classes.filter_form__button}>
                <button type="reset" className={classes.filter_form__button_reset}>Reset</button>
                <button type="submit" className={classes.filter_form__button_submit}>Filter</button>
            </span>
        </form>
        
    </div>
  )
}

export default FiltersForm