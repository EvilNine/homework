import React from 'react'
import s from './FriendMessage.module.css'

// создать тип вместо any и отобразить приходящие данные

export type FriendMessageType = {
    message: {
        id: number;
        user: {
            avatar: string;
            name: string;
        };
        message: {
            text: string;
            time: string;
        }
    };
}

const FriendMessage: React.FC<FriendMessageType> = (props) => {
    const data = props.message;

    return (
        <div id={'hw1-friend-message-' + data.id}
             className={s.friendMessage}>
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + data.id}
                    src={data.user.avatar}
                    alt={data.user.name}/>
                <div className={s.friendText}>
                    <div id={'hw1-friend-name-' + data.id}
                         className={s.friendName}>
                        {data.user.name}
                    </div>
                    <pre id={'hw1-friend-text-' + data.id}
                         className={s.friendMessageText}>
                        {data.message.text}
                    </pre>
                </div>
            </div>
            <div id={'hw1-friend-time-' + data.id}
                 className={s.friendTime}>
                {data.message.time}
            </div>
        </div>
    )
}

export default FriendMessage
