import React from 'react'

const Item = ({user, onRemove, onToggle}) => {
    const {username, email, id, active} = user; //추출
    return(
        <div>
            <b
                style={{color:active ? "green" : "black", cursor : "pointer"}}
                onClick = {()=>onToggle(id)}
            >
                {username}
            </b>
            <span>({email})</span>
            <button onClick={()=>onRemove(id)}>삭제</button>
        </div>
    )
}
function UserList({users, onRemove, onToggle, active}) {
    return (
        <>
            {users.map((user)=>
            <Item 
            user={user} 
            key = {user.id}
            onRemove={onRemove}
            onToggle = {onToggle}
            active = {active}/>)}
        </>
    )
}

export default UserList