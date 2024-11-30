/**
 * @copyright 2024 Oba.codes
 * @license Apache-2.0
 */

/**
 * genetrate a unique id by combinig the current timestamp and a random number
 * 
 * this function creates an identifier using the current time in miliseconds
 * @return {string}
 */

export default function generateID(){
    return Math.random().toString(36).slice(2) + Date.now().toString(36);
}