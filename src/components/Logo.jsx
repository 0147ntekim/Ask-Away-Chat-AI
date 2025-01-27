/**
 * @copyright 2024 oba.codes
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Assets
 */
import { logo } from '../assets/assets';

const Logo = ({ classes = '' }) => {
  return (
    <Link
      to='/'
      className={`min-w-max max-w-max h-[24px] ${classes}`}
    >
      <img
        src={logo}
        width={100}
        height={24}
        alt='phoenix logo'
        className=''
      />

      
    </Link>
  );
};

Logo.propTypes = {
  classes: PropTypes.string,
};

export default Logo;
