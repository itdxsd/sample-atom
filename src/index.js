import React from 'react';
import './styles/appInput.css'
import './styles/main.css'
import './assets/lib/bootstrap/bootstrap.min.css'
import './assets/lib/fonts/fontAwesome.min.css'
// import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';

// );
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
   <App />
);