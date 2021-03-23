import React from 'react';


const Notification = ({message, isErr}) => {


    return (
        <div className={isErr ? "error" : "m-added"}>
            {message}
        </div>
    )
}


export default Notification;