import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

// Use createRoot instead of render for concurrent mode
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

