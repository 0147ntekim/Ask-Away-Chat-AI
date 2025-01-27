/**
 * @copyright 2024 Oba.codes
 * @license Apache-2.0
 */


/**
 * Node modules
 */

import { useContext } from 'react';

/**
 * context
 */

import { SnackbarContext } from '../contexts/SnackbarContext';

export const useSnackbar = () => useContext(SnackbarContext);