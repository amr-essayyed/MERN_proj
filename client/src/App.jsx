import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { AuthProvider } from './contexts/AuthContext';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';

function App() {
  // const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <AuthProvider>
      <NavBar></NavBar>
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/editpost/:id" element={<EditPost />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
