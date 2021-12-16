import React, {useState,useEffect} from 'react';
import Avatar from '@mui/material/Avatar'; 
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import './Chat.css';
import {data} from "./getData"
function Chat() {
  
    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar/>
                <div className='chat_headerInfo'>
                    <h3 className='chat-room-name'></h3>
                    <p className='chat-room-last-seen'>
                        Last seen 
                    </p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <IconButton>
                        
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                    
                </div>
            </div>
            <div className='chat_body'>
                    <p className="chat_message chat_reciever">
                        <span className="chat_name">
                                Mahabeer Singh
                        </span>
                        This is text Message
                        <span className="chat_timestemp"></span>
                    </p>
                    <p className="chat_message chat_reciever">
                        <span className="chat_name">
                                Mahabeer Singh
                        </span>
                        This is text Message
                        <span className="chat_timestemp"></span>
                    </p>
                    <p className="chat_message">
                        <span className="chat_name">
                                Mahabeer Singh
                        </span>
                        This is text Message
                        <span className="chat_timestemp"></span>
                    </p>
               
            </div>
            <div className='chat_footer'>
                <InsertEmoticonIcon />
                <form>
                    <input type="text" placeholder="Type a message"/>
                    <button type="submit" > Send a Message</button>
                </form>
                <MicIcon/>
            </div>
            
        </div>
    )
}

export default Chat