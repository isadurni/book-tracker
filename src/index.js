import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Bookathon from './Book-a-Thon';

const container = document.getElementById('root');
const root = createRoot(container); // Use createRoot to create the root
root.render(<App />); // Render your App component