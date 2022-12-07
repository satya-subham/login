import React, { useState } from 'react'

export function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);

    const handleSubmit = (e) =>{
       e.preventDefault();
       if(username.length > 4 && password.length > 4){
        setLogin(true)
       }
    };

    const handleLogout = () => {
        setLogin(false);
    }

    const handleUsername = (e) =>{
        setUsername(e.target.value);
    };

    const handlePassword = (e) =>{
        setPassword(e.target.value);
    };
  return (
    <>
    {
        login ? 
        <>
        <h1>welcome {username}</h1>
        <button onClick={handleLogout}>LogOut</button>
        </> :<form onSubmit={handleSubmit}>
        <div className="heading">
        <h1>Login</h1>
        </div>
        <div className="username">
            <input type="text" name="username" id="username" onChange={handleUsername}/>
        </div>
        <div className="password">
            <input type="password" name="password" id="password" onChange={handlePassword}/>
        </div>
        <button type='submit'>LogIn</button>
    </form>
    }
    </>
  )
}
