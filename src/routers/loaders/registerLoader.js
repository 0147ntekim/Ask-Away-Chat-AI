/**
 * @copyright 2025 Oba.codes
 * @license Apache-2.0
 */

import { redirect } from 'react-router-dom'


/**
 * custom modules
 */

import { account } from '../../lib/appwrite';

const registerLoader = async () => {
    try {
        //attempt to retrive the user's account information
        await account.get();
       
    } catch (err) {
        console.log(`Error getting user session: ${err.message}`);

        return null;
    }

    //if account retrieval is successful redirect to homepage ('/')
    return redirect('/')
}

export default registerLoader;