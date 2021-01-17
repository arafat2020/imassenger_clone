import { IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Chat.css';
import MicNoneIcon from '@material-ui/icons/MicNone';
import Massage from './Massage';
import {  selecChatId, selecChatName } from '../../features/chatSlice';
import { useSelector } from 'react-redux';
import db from "../../firebase";
import firebase from 'firebase/app';
import 'firebase/firestore'
import { selectUSer } from '../../features/userSlice';
import FlipMove from 'react-flip-move';

const Chat = () => {
    const [input, setInput] = useState("");
    const channelName = useSelector(selecChatName);
    const chatId = useSelector(selecChatId);
    const [massage, setMassage] = useState();
    const user = useSelector(selectUSer)

    useEffect(() => {
        if (chatId) {
            db.collection("chats").doc(chatId).collection("massages").orderBy("timestamp", "desc").onSnapshot(snapShot => (
                setMassage(
                    snapShot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    }))
                )
            ))
        }
    }, [chatId]);
    const sendmassage = (e) => {
        e.preventDefault()
        db.collection("chats")
            .doc(chatId)
            .collection("massages")
            .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                massage: input,
                uid: user.uid,
                photo: user.photo,
                email: user.email,
                dispalyname: user.displayname
                
            })
        document.getElementById('field').reset()
        setInput("")
    }
    console.log(massage)
    return (
        <div className="chat">
            <div className="chat_header">
                <h4>To: <span className="chat_name" >{ channelName}</span></h4>
                <strong>Details</strong>
            </div>
            <div className="chat_chatmassage">
                <FlipMove>
                {massage?.map(({ id, data }) => (
                    <Massage
                        key={id}
                        id={id}
                        content={data}
                    />
                ))}
                </FlipMove>
            </div>
            <div className={`chat_input ${channelName===null && 'chat_hidden'}`}>
                <form id="field">
                    <input  onChange={e => setInput(e.target.value)}  placeholder="iMassage" type="text" />
                    <button onClick={sendmassage}>Send</button>
                </form>
                <IconButton>
                    <MicNoneIcon/>
                </IconButton>
            </div>
        </div>
    );
};

export default Chat;