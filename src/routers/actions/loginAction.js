/**
 * @copyright 2024 Oba.codes
 * @license Apache-2.0
 */


/**
 * Node modules
 */

import { redirect } from 'react-router-dom'


/**
 * custom modules
 */

import { account } from '../../lib/appwrite'

/**
 * handle the login action
 */

const loginAction = async ({ request }) => {
    // Retrive the form data from the incoming request
    const formData = await request.formData();

    try {
        // Attempt to create a session using email and password from the data
        await account.createEmailPasswordSession(
            formData.get('email'),
            formData.get('password')
        );

        //on successful login redirect to the homepage 
        return redirect('/')
    } catch (err) {
        //return an error response with a error message
        return{
            message: err.message,   
        }
        
    }
}

export default loginAction;