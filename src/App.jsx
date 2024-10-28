import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Login from './pages/login'
import Chat from './pages/chat'
import Profile from './pages/profile'
import Register from './pages/register'
import ResetPassword from './pages/resetpassword'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/resetpassword" element={<ResetPassword />}/>
        <Route path="/chat" element={<Chat />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="*" element={<Navigate to="/login" />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
