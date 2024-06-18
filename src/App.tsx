import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import UsersPage from './pages/users/UsersPage'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
            <Route index element={<UsersPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
