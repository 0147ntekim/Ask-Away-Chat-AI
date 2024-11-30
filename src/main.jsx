/**
 * @copyright 2024 Oba.codes
 * @license Apache-2.0
 */


import { StrictMode } from 'react'; 
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'


/**
 * custom modules
 */
import router from './routers/routes';

/**
 * css link
 */

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
