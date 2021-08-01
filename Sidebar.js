import React from 'react';
import "./sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {Avatar, IconButton } from '@material-ui/core';
import {SearchOutlined} from '@material-ui/icons';
import SidebarChat from './SidebarChat';
function sidebar() {
    return (
        <div className='Sidebar'>
            <div className="sidebar_header"> 
            <Avatar src="https://avataaars.io/?avatarStyle=Circle&
            topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&
            facialHairType=Blank&clotheType=BlazerShirt&eyeType=
            Default&eyebrowType=Default&mouthType=Default&skinColor=Light"/>
                <div className="sidebar_headerRight"> 
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer"> 
                    <SearchOutlined/>
                    <input placeholder="Search or Start a new Chat" type="text" />
                </div>
            </div>

            <div className="sidebar_chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    )
}

export default sidebar;
