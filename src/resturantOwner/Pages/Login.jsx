import {Box} from '@mui/system'
import { useState } from 'react'
import { useNavigate,Link } from "react-router-dom"

import owners from '../../Json/Owners'


const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handelUsername = (e) => {
        setUsername(e.target.value)
    }

    const handelPassword = (e) => {
        setPassword(e.target.value)
    }
    
    const checkData = (e) => {
        e.preventDefault();

        const obj = {
            username : username,
            password : password
        }
        // console.log(obj);
        const owner = owners.filter(item => (item.username === obj.username && item.password === obj.password))
        // console.log(owner);
        if(owner.length != 0)
        navigate(`dashboard/${owner[0].id}/`)
        
    }

    return (
        <Box className="login" onsubmit={checkData}>
            <form className='login__form' >
                <h2>Restaurant Owner</h2>
                <div className="input__box">
                    <input 
                        type="text" 
                        className='login__input' 
                        placeholder='Username' 
                        onChange={handelUsername} 
                    />
                </div>
                <div className="input__box">
                    <input 
                        type="password" 
                        className='login__input' 
                        placeholder='Password' 
                        onChange={handelPassword} 
                    />
                </div>
                <div className="input__box">
                    <button
                        type="submit" 
                        className='login__submit' 
                        onClick={checkData}
                    >
                        Login
                    </button>
                </div>
                <div className="input__box" style={{textAlign: 'center'}}>
                    <Link
                        to='register'
                    >
                        Sign Up
                    </Link>
                </div>
            </form>
        </Box>
    )
}

export default Login
