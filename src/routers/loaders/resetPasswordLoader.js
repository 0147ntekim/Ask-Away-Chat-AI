/**
 * @copyright 2025 Oba.codes
 * @license Apache-2.0
 */

import { redirect } from 'react-router-dom'


/**
 * custom modules
 */

import { account } from '../../lib/appwrite';

const resetPasswordLoader = async ({ request }) => {
    const url = new URL(request.url);


    try {
        //attempt to retrive the user's account information
        await account.get();
    
    } catch (err) {
        console.log(`Error getting user session: ${err.message}`);

    }

    if(!url.searchParams.get('userId') && !url.searchParams.get('secret')){
        return redirect('/reset-link')
    }

    return null
}

export default resetPasswordLoader;