/**
 * @copyright 2024 Oba.codes
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { motion } from 'framer-motion';
import { useLoaderData } from 'react-router-dom';

/**
 * Components
 */
import PageTitle from '../components/pageTitle';
import UserPrompt from '../components/UserPrompt';

const Conversation = () => {
    const { conversation: { title, chats }} = useLoaderData() || {};
  return (
    <>
        {/** Meta title */}
        <PageTitle title={`${title} | Ask-Away`}/>

        <motion.div className="">
          {chats.map((chat) => (
            <div key={chat.$id}>
              {/** userprompt */}
              <UserPrompt text={chat.user_prompt}/>
              <p>{chat.ai_response}</p>
            </div>
          ))}
        </motion.div>
    </>
    
  )
}

export default Conversation
