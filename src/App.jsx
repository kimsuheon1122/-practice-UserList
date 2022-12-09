import React, { useRef } from 'react';
import './App.css';
import UserList from './UserList.jsx';
import CreateUser from './CreateUser.jsx';
import { useState } from 'react';

function App() {
  const [inputs, setInputs] = useState({
    username:"", eamil:""
  })
  const {username, email} = inputs;

  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({...inputs, [name]:value})
  }
  
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
    </>
  );
}

export default App;
