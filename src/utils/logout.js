/**
 * @copyright 2024 Oba.codes
 * @license Apache-2.0
 */

/**
 * Custom modules
 */

import { account } from "../lib/appwrite";
/**
 * Logs out the current user by deleting their session and navigates tot the login page
 * 
 * @async
 * @function logout
 * @param {Function} navigate - the navigation function to redirect the user after logout
 * @returns {Promise<void>} - returns a promise that resolves once the session is deleted and navigation occurs
 * @throws {Error} if there is an issue deleting the user session, th error will be logged to the console.
 */


const logout = async (navigate) => {
    try {
        await account.deleteSession('current');
    } catch(err){
        return console.log(`Error deleting user session ${err.message}`);
    }

    return navigate('/login');
}

export default logout;