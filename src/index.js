import React from 'react';
import {createRoot} from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import routes from './Routes';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<BrowserRouter  Routes={routes}>
   <App/>
</BrowserRouter>  
)