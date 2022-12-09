import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './UserList.jsx';
import CreateUser from './CreateUser.jsx';

function App() {
  const [inputs, setInputs] = useState({
    username:"", eamil:""
  })
  const {username, email} = inputs;

  const onChange = useCallback((e) => {
    const {name, value} = e.target;
    setInputs({...inputs, [name]:value})
  },[inputs])
  
  const onCreate = () => {
    const user = {
      id : nextId.current,
      username,
      email
    }
    nextId.current += 1;
    setUsers(users.concat(user))
    setInputs({username:"", email:""});
  }

  const onRemove = (id) =>{
    setUsers(users.filter((user)=>user.id!==id));
  }

  const onToggle = (id) => {
    setUsers(users.map((user)=>user.id === id ?
    {...user, active:!user.active}
    :user))
  }
  /* active상태의 사용자 count함수 */
  function countActiveUsers(users){
    return users.filter((user)=>user.active).length
  }
  const [users, setUsers] = useState([
    { id:1, 
      username:'kimsuheon', 
      email:'kimsuheon@gmail.com',
      active:true
    },
    { id:2, 
      username:'leejiyeon', 
      email:'leejiyeon@daum.net',
      active:false

    },
    { id:3, 
      username:'jungjaehyun', 
      email:'jungjaehyun@gmail.com',
      active:false
    },
  ]);
  const nextId = useRef(4);

  const count = useMemo(()=>countActiveUsers(users), [users])
  return (
    <>
    <CreateUser
      username = {username}
      email = {email}
      onCreate = {onCreate}
      onChange = {onChange}
    />
    <UserList 
    users={users}
    onRemove={onRemove}
    onToggle={onToggle}
    />
    <div className="">ACTIVE 상태의 사용자 수 : {count}</div>
    </>
  );
}

export default App;
