import { Box } from '@mui/system'
import { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import admin from '../../Json/Admins'

const Login = () => {
    const navigate = useNavigate();

    const [admins, setAdmins] = useState(admin)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // useEffect(()=>{
    //     axios('http://localhost:5000/api/admins').then(res => {
    //         setAdmins(res.data)
    //         console.log(res.data);
    //     })
    // },[])

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

        const admin = admins.filter(item => (item.usernaame === obj.username && item.password === obj.password))

        // if(admin.length !== 0)
        navigate(`dashboard/${admin[0].id}/`)

    }

    return (
        <Box className="login" onsubmit={checkData}>
            <form className='login__form' >
                <h2>Admin Login</h2>
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
            </form>
        </Box>
    )
}

export default Login
