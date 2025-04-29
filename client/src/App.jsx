import background from '../../public/assets/images/pattern.jpg';
import './App.css';
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
    // <div className="background-img" style={{ backgroundImage: `url(${background})` }} >
      // <div className="absolute inset-0 bg-black bg-opacity-5">
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
      // </div>
    // </div>
  )
}

export default App
