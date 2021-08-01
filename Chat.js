import { Avatar, IconButton } from '@material-ui/core'
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {AttachFile, SearchOutlined, InsertEmoticon} from '@material-ui/icons';
import MicIcon from "@material-ui/icons/Mic"
import React from 'react'
import "./Chat.css"

function Chat() {
    return (
        <div className = "chat">
            <div className = "chat_header"> 
            <Avatar/>

            <div className ="chat_headerInfo">
                <h3>Room Name</h3> 
                <p> Last seen at ....</p>

                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>

            </div>
            </div>

            <div className="chat_body">
                <p className="chat_message">
                    <span className="chat_name"> Mk
                    </span>

                    This is a message.
                    <span className="chat_timestamp"> 
                    {new Date().toUTCString()
                    }
                    </span>
                    
                    
                </p> 
                <p className="chat_message chat_receiver">
                    <span className="chat_name"> Siri
                    </span>

                    This is a message.
                    <span className="chat_timestamp"> 
                    {new Date().toUTCString()
                    }
                    </span>
                    
                    
                </p>
                <p className="chat_message">
                    <span className="chat_name"> Vasu
                    </span>

                    This is a message.
                    <span className="chat_timestamp"> 
                    {new Date().toUTCString()
                    }
                    </span>
                    
                    
                </p>
                
                

            </div>

            <div className="chat_footer">
                    <InsertEmoticon/>
                    <form> 
                        <input placeholder = "Type a message" type="text" />
                        <button type = "submit"> Send a message
                        </button>
                    </form>
                    <MicIcon />

            </div>
        </div>
    )
}

export default Chat
