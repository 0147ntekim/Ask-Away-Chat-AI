/**
 * @copyright 2025 Oba.codes
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useState, useCallback} from "react";


/**
 * Acustom React Hook for managing a toggle state.
 * 
 * @returns {[boolean, Function]} An array containing the current toggle state (boolean) and a function to toggle the state.
 */
const useToggle = () => {
    const [isOpen, setToggle] = useState(false);

    const toggle = useCallback(() => {
        setToggle((prev) => !prev);
    }, []);

    return [isOpen, toggle]
}

export { useToggle }