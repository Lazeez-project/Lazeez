import {useState} from 'react'
import Input from '../../resturantOwner/components/Input'
import {Box} from '@mui/system'
import Button from '@mui/material/Button'
import axios from 'axios'

const AddMeal = () => {

    const [data, setData] = useState({});

    const makeAdmin = (name,e) => {
        setData((prevState) => ({
            ...prevState,
            [name] : e
        }))
    }

    const sendData = () => {
        axios({
            method : 'post',
            url : 'http://localhost:5000/api/admins',
            data : data
        })
        .then(response => console.log(response.data))
        .catch(err => console.log(err))
    }

    return (
    <Box sx={{margin : '0 auto',width : {xs: '100%' , md : '80%' , lg : '70%'}, minHeight: '60vh', padding : {xs: '10px', md: '30px', lg: '50px'},display:'flex', flexWrap: 'wrap', justifyContent: 'end'}}>
            <h2 className="page__title" style={{ fontSize : '70px'}}>Add New Admin</h2>
            <Input inputValue={makeAdmin} name="username" title="Username" plaseholder="Add the new admin's Name" type="text" />
            <Input inputValue={makeAdmin} name="email" title="Email" plaseholder="Add the new admin's Email" type="email" />
            <Input inputValue={makeAdmin} name="password" title="Password" plaseholder="New Admin's Password" type="password" />
            <Input inputValue={makeAdmin} name="confirm" title="Confirm Password" plaseholder="Confirm New Admin's Password" type="password" />
            <Button variant="contained" color="success" onClick={sendData} sx={{width:"200px", height:'50px', backgroundColor: 'var(--main-color)'}}>Add</Button>
        </Box>
    );
}

export default AddMeal
