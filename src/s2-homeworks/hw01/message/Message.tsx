import React from 'react'
import s from './Message.module.css'

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: {
        id: number
        user: {
            avatar: string;
            name: string;
        }
        message: {
            text: string;
            time: string;
            }
        }
}


// нужно отобразить приходящие данные
const Message: React.FC<MessagePropsType> = (props) => {
    const data = props.message;
    return (
        <div id={'hw1-message-' + data.id} className={s.message}>
            <div className={s.imageAndText}>
                <img id={'hw1-avatar-' + data.id}
                     src={data.user.avatar}
                     alt={data.user.name}/>
                <div className={s.text}>
                    <div id={'hw1-name-' + data.id} className={s.name}>
                        {data.user.name}
                    </div>
                    <pre id={'hw1-text-' + data.id} className={s.messageText}>
                        {data.message.text}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + data.id} className={s.time}>
                {data.message.time}
            </div>
        </div>
    )
}

export default Message
