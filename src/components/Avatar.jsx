/**
 * @copyright 2025 Oba.codes
 * @license Apache-2.0
 */


/**
 * node modules
 */
import PropTypes from "prop-types"


/**
 * custom modules
 */
import { avatars } from "../lib/appwrite";

const Avatar = ({ name }) => {
  return (
    <figure className="avatar">
        <img src={avatars.getInitials(name, 48,48)} width={48} height={48} alt={name} />
    </figure>
  )
};

Avatar.propTypes = {
    name: PropTypes.string,
}

export default Avatar;
