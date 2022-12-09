import React from 'react'

const Item = ({user, onRemove}) => {
    const {username, email, id} = user; //추출
    return(
        <div>
            <b>{username}</b><span>({email})</span>
            <button onClick={()=>onRemove(id)}>삭제</button>
        </div>
    )
}
function UserList({users, onRemove}) {
    return (
        <>
            {users.map((user)=>
            <Item 
            user={user} 
            key = {user.id}
            onRemove={onRemove}/>)}
        </>
    )
}

export default UserList