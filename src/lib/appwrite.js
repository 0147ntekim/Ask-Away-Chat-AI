/**
 * @copyright 2024 Oba.codes
 * @license Apache-2.0
 */


import { Client, Account } from 'appwrite';


/**
 * initial appwrite client
 */
const client = new Client()

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('intelligence-chat-ai')
;
    


const account = new Account(client);

export { account };