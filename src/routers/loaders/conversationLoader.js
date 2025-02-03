/**
 * @copyright 2025 Oba.codes
 * @license Apache-2.0
 */

/**
 * 
 * Node Modules
 */
import { redirect } from "react-router-dom";

/**
 * custom modules
 */
import { account, databases } from "../../lib/appwrite";

const conversationLoader = async ({ params }) => {
    const { conversationId } = params;
    const data = {};


    try {
        //Attempt to retrieve the user's account information.
        data.user = await account.get();

    } catch (err) {
        console.log(`Error getting user account: ${err.message}`);
        // if there's an error getting the user, log it and redirect to the login page.
        return redirect('/login');
    }

    try {
        //Attempt to fetch the conversation document from the Appwrite database.
        data.conversation = await databases.getDocument(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            'ask-away-collection',
            conversationId,
        );
    } catch (err) {
        //if there's an error fetching the conversation, log it and re-throw the error.
        console.log(`Error getting conversation: ${err.message}`);
        throw err; // Re-throw the error so it can he handled by the Error boundary or a suitable component
    }

    //Return the data object containing user and conversation information.
    return data;
};


export default conversationLoader;