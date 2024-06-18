import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import UsersPage from './pages/users/UsersPage'
import UserDetail from './pages/users_detail/UserDetail'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
            <Route index element={<UsersPage/>}/>
            <Route path=':uid' element={<UserDetail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
