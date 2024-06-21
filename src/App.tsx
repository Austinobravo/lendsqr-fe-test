import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import UsersPage from './pages/users/UsersPage'
import UserDetail from './pages/users_detail/UserDetail'
import NotFound from './pages/NotFound/NotFound'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
            <Route index element={<UsersPage/>}/>
            <Route path='users/:uid' element={<UserDetail/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
