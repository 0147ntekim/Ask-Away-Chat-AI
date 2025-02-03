/**
 * @copyright 2025 Oba.codes
 * @license Apache-2.0
 */


import { Client, Account, Avatars, Databases } from 'appwrite';


/**
 * initial appwrite client
 */
const client = new Client()

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

/**
 * Initial appwrite account
 */
const account = new Account(client);


/**
 * Initial appwrite avatars
 */
const avatars = new Avatars(client)
    

/**
 * Initial appwrite databases
 */
const databases =  new Databases(client);


export { account, avatars, databases };