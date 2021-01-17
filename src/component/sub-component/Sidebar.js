import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import SearchIcon from '@material-ui/icons/Search';
import RateReviewIcon from '@material-ui/icons/RateReview';
import { Avatar,IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat';
import { useSelector } from 'react-redux';
import { selectUSer } from '../../features/userSlice';
import db,{ auth } from '../../firebase';



const Sidebar = () => {
    const user = useSelector(selectUSer);
    const [chat, setChat] = useState([]);
    useEffect(() => {
        db.collection("chats").onSnapshot((snapshot) => {
            setChat(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    data:doc.data()
               }))
           )
       }) 
    }, [])
    
    const addChat = () => {
        const chatName = prompt("Please enter a chat name");
        if (chatName) {
            db.collection("chats").add({
                chatName: chatName
            })
        }
    }
    
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar onClick={()=>auth.signOut()} src={user.photo} className="sidebar_avater"/>
                <div className="sidebar_input">
                    <SearchIcon />
                    <input placeholder="Search" />
                </div>
                <IconButton onClick={addChat} className="sidebar_rate">
                    <RateReviewIcon/>
                </IconButton>
            </div>
            <div className="sidebarchats">
                {chat.map(({ id, data: { chatName } }) => (
                    <SidebarChat key={id} id={id} chatName={chatName} />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;