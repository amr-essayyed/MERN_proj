import background from '../../public/assets/images/pattern.jpg';
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

// root.style.backgroundImage = `url(${background})`;
// root.style.backgroundAttachment = 'fixed';
// root.style.position = 'absolute';
// root.style.height = '100vh';
// root.style.overflow = 'scroll';
// // root.style.inset = 0;
// root.style.width = '100vw'

// ;= backgroundAttachment:fixed;`