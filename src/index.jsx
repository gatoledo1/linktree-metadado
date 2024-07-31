import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';
import metadata from './metadata.json';

const root = createRoot(document.getElementById('root'));
root.render(<App metadata={metadata} />);
