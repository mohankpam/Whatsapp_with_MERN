import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SidebarChat.css";

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat_info"> 
                <h2> Room name </h2>
                <p> This will be the last message in the room.</p>
            </div>
        </div>
    )
}

export default SidebarChat;
