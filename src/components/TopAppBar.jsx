/**
 * @copyright 2025 Oba.codes
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { useNavigation, useNavigate, useLoaderData, useParams, useSubmit } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types';


/**
 * custom modules
 */
import logout from '../utils/logout'
import deleteConversation from '../utils/deleteConversation';
/**
 * Custom Hooks 
*/
import { useToggle } from '../hooks/useToggle'

/**
 * components
*/
import { IconBtn } from './Button'
import Avatar from './Avatar'
import Menu from './Menu'
import MenuItems from './MenuItems'
import { LinearProgress } from './Progress'
import Logo from '../components/Logo';
/**
 * Assets
 */



const TopAppBar = ({ toggleSidebar }) => {

  //...useNavigation provides navigation state (loading, idle, submitting, etc)
  const navigation = useNavigation();

  //... useNavigate: Function for programmatically navigating between routes.
  const navigate = useNavigate();

  /**
   *  - user: User data for the currently logged-in user.
  */
  const { conversations, user } = useLoaderData();

  /**
   * params Object containing URL parameters, including the conversationId.
   */
  const params = useParams();

    /**
   * Obtain the useSubmit hook for handling form submissions:
   * - submit: Function for submitting forms and triggering server-side actions.
   */
  const submit = useSubmit();


  /**
   * use d custom hook to manage the menu's show state.
   * 'showmenu holds the current state
   * and 'setShowMenu' is a function to toggle the menu.
  */

  const [showMenu, setShowMenu] = useToggle();

  /**
   * check if the cureent navigation is 'loading ' and if there is no form data associated with the navgation
   * this condition typically signifies a normal page load,
   * where the pae is loading for the first time or is being reloaded without submitting a form.
   */

  const isNormalLoad = navigation.state === 'loading' && !navigation.formData;

  return (
    <header className="relative flex justify-between items-center h-16 px-4">
        <div className="flex items-center gap-1">
          <IconBtn 
            icon='menu'
            title='Menu'
            classes='lg:hidden'
            onClick={toggleSidebar}
          />      

          <Logo classes='lg:hidden'/>
        </div>

        {params.conversationId && (
          <IconBtn
            icon='delete'
            classes='ms-auto me-1 lg:hidden'
            onClick={() => {
              //find the current conversation title
              const { title } = conversations.documents.find(
                ({ $id }) => params.conversationId === $id,
              );
  
              deleteConversation({
                id: params.conversationId,
                title,
                submit,
              });
  
            }}
          />
        )}

        <div className="menu-wrapper">
          <IconBtn onClick={setShowMenu}>
            <Avatar name={user.name}/>
          </IconBtn>

          <Menu classes={showMenu ? 'active' : ''}>
            <MenuItems labelText='Log Out' onClick={() => logout(navigate)}/>
          </Menu>
        </div>

        <AnimatePresence>
          {isNormalLoad && (<LinearProgress classes='absolute top-full left-0 right-0 z-10'/>)}
        </AnimatePresence>
    </header>
  )
}


TopAppBar.propTypes = {
  toggleSidebar: PropTypes.func,
};

export default TopAppBar;
