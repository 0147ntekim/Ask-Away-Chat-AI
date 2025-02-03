/**
 * @copyright 2025 Oba.codes
 * @license Apache-2.0
 */


/**
 * Node Modulues
 */

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export default model;