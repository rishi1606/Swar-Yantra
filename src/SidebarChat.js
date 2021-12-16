import React, {useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar'; 
import './SidebarChat.css';


function SidebarChat({name}) {
        return(
      
            <div className="sidebarChat">
                <Avatar />
                <div className="sidebarChat_info">
                    <h2>{name}</h2>
                </div>
            </div>
  
        )
        
    
}

export default SidebarChat