import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setChat } from '../../features/chatSlice';
import './SidebarChat.css';
import db from '../../firebase';
import * as timeago from 'timeago.js';

const SidebarChat = ({ id, chatName }) => {
    const dispatch = useDispatch();
    const [chatinfo, setChatInfo] = useState([]);

    useEffect(() => {
        db.collection("chats")
            .doc(id)
            .collection("massages")
            .orderBy("timestamp", "desc")
            .onSnapshot(snapshot => setChatInfo(
                snapshot.docs.map(doc => doc.data())
            ))
    }, [id])
    console.log(chatinfo)
    return (
        <div onClick={() => dispatch(setChat({
            chatId: id,
            chatName: chatName
        }))} className="sidebarchat">
            <Avatar src={chatinfo[0]?.photo} />
            <div className="sisdebarchat_info">
                <h3>{ chatName}</h3>
                <p>{ chatinfo[0]?.massage}</p>
                <small>{ timeago.format(new Date(chatinfo[0]?.timestamp?.toDate()).toLocaleString())}</small>
            </div>
        </div>
    );
};

export default SidebarChat;