import background from '../../public/assets/images/pattern.jpg';
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
    <div style={{  backgroundImage: `url(${background})`}}>
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
    </div>
  )
}

export default App
