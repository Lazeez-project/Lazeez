import {useState} from 'react'
import Input from '../components/Input'
import {Box} from '@mui/system'
import Button from '@mui/material/Button'
import { useParams } from 'react-router'

const ChangePassword = (props) => {
    console.log(props);

    const { id } = useParams();

    const [passwords, setPasswords] = useState({id: id});

    const makePasswords = (name,e) => {
        setPasswords((prevState) => ({
            ...prevState,
            [name] : e
        }))
    }

    const sendPasswords = () => {
        console.log(passwords);
    }

    return (
        <Box sx={{margin : '0 auto',width : {xs: '100%' , md : '80%' , lg : '70%'}, minHeight: '60vh', padding : {xs: '10px', md: '30px', lg: '50px'},display:'flex', flexWrap: 'wrap', justifyContent: 'end'}}>
            <h2 className="page__title" style={{ fontSize : '40px', marginTop: '50px'}}>Change Password</h2>
            <Input inputValue={makePasswords} name="oldPassword" title="Old Password" plaseholder="Your Old Password" type="password" />
            <Input inputValue={makePasswords} name="newPassword" title="New Password" plaseholder="Your New Password" type="password" />
            <Input inputValue={makePasswords} name="Confirm" title="Confirm Password" plaseholder="Confirm Your New Password" type="password" />
            <Button variant="contained" color="success" onClick={sendPasswords} sx={{width:"200px", height:'50px', backgroundColor: 'var(--main-color)'}}>Change</Button>
        </Box>
    )
}

export default ChangePassword
