/**
 * @copyright 2024 Oba.codes
 * @license Apache-2.0
 */


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
    return null
}

export default registerAction;
