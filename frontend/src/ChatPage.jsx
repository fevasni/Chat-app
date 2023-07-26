import {MultiChatSocket, MultiChatWindow ,useMultiChatLogic} from 'react-chat-engine-advanced';
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatPage = (props) => {
    const chatProps= useMultiChatLogic(
        'fc15ab89-d6c0-4468-afcd-3c39eb1e2445',
        props.user.username,
        props.user.secret
    )
    return (
    <div style ={{ height:'100vh' }}>
        <MultiChatSocket {...ChatPage}/>
        <PrettyChatWindow {...ChatPage} style={{ height:'100%' }}/>
    </div>
    
  )
}

export default ChatPage