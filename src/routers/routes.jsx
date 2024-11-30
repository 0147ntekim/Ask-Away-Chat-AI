/**
 * @copyright 2024 Oba.codes
 * @license Apache-2.0
 */



/**
 * Node Modules
 */



import { createBrowserRouter } from 'react-router-dom';

/**
 * components
 */

import App from '../App.jsx'
import Register from '../pages/register.jsx'

/**
 * actions
 */

import registerAction from './actions/registerActions.js';

/**
 * Router
 */

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/register',
        element: <Register />,
        action: registerAction,
    },
]);

export default router;