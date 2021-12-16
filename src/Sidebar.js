import React, {useState,useEffect} from 'react';
import './Sidebar.css';
import Avatar from '@mui/material/Avatar'; 
import { IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';
import {data} from "./getData"
import db from "./firebase"
function Sidebar() {
    const [chats, setChats] = useState(data);
    useEffect(()=>{
        db.collection("chats").onSnapshot(snapshot=>{
            setChats(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            }
               

            )))
        })
    },[])

    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                    
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchIcon />
                    <input type="text" placeholder="Search or start new chat"/>
                </div>
            </div>
            <div className="sidebar_chats">
             {
                 chats.chats.map(newData=>(
                    <SidebarChat name={newData.topic}/>
                    
                 ))
             }
                 
            </div>
        </div>
    );
}

export default Sidebar;