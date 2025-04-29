// import background from '../../public/assets/images/pattern.jpg';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './index.css'
import App from './App.jsx'

let root = document.getElementById('root');
createRoot(root).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
)
