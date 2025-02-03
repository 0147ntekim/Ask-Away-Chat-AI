/**
 * @copyright 2025 Oba.codes
 * @license Apache-2.0
 */

/**
 * Node Modulus
 */
import { redirect } from "react-router-dom";


/**
 * custom modules
 */
import { account } from "../../lib/appwrite";
import generateID from "../../utils/generateID";
/**
 * handles user registration
 */

const registerAction = async ({ request }) => {
    //retrieve the form data from the incoming request

    const formData = await request.formData();
    const userId = generateID();
    try{
        await account.create(
            userId,
            formData.get('email'), //retieves email from formData
            formData.get('password'), //retrieves password from formdata
            formData.get('name'), //retirves name from formdata
        )
    } catch(err) {
        return {
            message: err.message, //Error message from the caught error
        }
    }

    //after succesfully creating an account, login the user and redirect to homepage

    try{
        //creates a session for the new user with the provided email and password
        await account.createEmailPasswordSession(
            formData.get('email'),
            formData.get('password'),
        )
    }catch (err) {
        // logs any error encountere during session creation and redirect to login page 
        console.log(`Error creating email session: ${err.message}`);

        return redirect('/login');
    }

    //redirects the user to the home page upon successful registration an login
    return redirect('/');
}

export default registerAction;
