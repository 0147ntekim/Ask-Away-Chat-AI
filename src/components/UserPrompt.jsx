/**
 * @copyright 2025 Oba.codes
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import { useRef, useState, useEffect } from "react";


/**
 * custom modules
 */
import { useToggle } from "../hooks/useToggle";

/**
 * components
 */
import Avatar from "./Avatar";
import { IconBtn } from "./Button";

const UserPrompt = ({ text }) => {
    //retrieve the user data from the loader using the useLoaderData hook.
    const { user } = useLoaderData();

    //use the useToggle HOOK TO MANAGE THE EXPANDED STATE OF THE use prompt text
    const [isExpanded, toggleExpand] = useToggle();

    // create a ref to access the text box element in the dom .
    const textBoxRef = useRef();

    // Initialize the hasMoreContent state, indicating whether the content exceeds the visible height of the text box.
    const [hasMoreContent, setMoreContent] = useState(false);

    /** Use useEffect to update the hasMoreContent state whenever the text box ref changes.
   * This ensures that the state is updated correctly if the text box content changes.
   */
    useEffect(() => {
        setMoreContent(
          textBoxRef.current.scrollHeight > textBoxRef.current.clientHeight,
        );
      }, [textBoxRef]);

  return (
    <div className="grid grid-cols-1 items-start gap-1 py-4 md:grid-cols-[max-content, minmax(0,1fr),max-content] md:gap-5 ">

        <Avatar name={user?.name} />


        <p className={`text-bodyLarge pt-1 whitespace-pre-wrap 
            ${!isExpanded ? 'line-clamp-4' : ''}`}
            ref={textBoxRef}
        >
            {text}
        </p>

        {hasMoreContent && (
            <IconBtn
                icon={isExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                onClick={toggleExpand}
                title={isExpanded ? 'Collapse text' : 'Expand text'}
            />
        )}
    </div>
  )
};

UserPrompt.propTypes = {
    text: PropTypes.string,
};

export default UserPrompt;
