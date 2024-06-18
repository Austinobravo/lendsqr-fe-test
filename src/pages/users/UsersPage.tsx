import React from 'react'
import Users from '../../components/Users/Users'
import UsersTable from '../../components/UsersTable/UsersTable'

const UsersPage = () => {
  return (
    <>
        <div>
            <Users/>
        </div>
        <div>
            <UsersTable/>
        </div>
    </>
  )
}

export default UsersPage