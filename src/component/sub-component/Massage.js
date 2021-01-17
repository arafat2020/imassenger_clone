import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { selectUSer } from '../../features/userSlice';
import './Massage.css';
import * as timeago from 'timeago.js'


const Massage = forwardRef(
    ({ id, content: {
        uid,
        photo,
        massage,
        email,
        displayname,
        timestamp
    } },ref) => {
        const user = useSelector(selectUSer);
        return (
            <div ref={ref} className={`massage ${user.email === email && 'massenge_sender'}`}>
                <Avatar className="massage_photo" src={photo} />
                <p>{ massage}</p>
                <small>{ timeago.format(new Date(timestamp?.toDate()).toLocaleString())}</small>
            </div>
        );
    }
)

export default Massage;