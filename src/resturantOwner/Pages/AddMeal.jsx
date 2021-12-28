import {useState} from 'react'
import Input from '../components/Input'
import {Box} from '@mui/system'
import Button from '@mui/material/Button'
import { useParams } from 'react-router'

const AddMeal = () => {

    const {id} = useParams();
    const [newmeal, setNewmeal] = useState({resId : id});

    const makeMeal = (name,e) => {
        setNewmeal((prevState) => ({
            ...prevState,
            [name] : e
        }))
    }

    const sendData = () => {
        console.log(newmeal);
    }

    return (
        <Box sx={{margin : '0 auto',width : {xs: '100%' , md : '80%' , lg : '70%'}, minHeight: '60vh', padding : {xs: '10px', md: '30px', lg: '50px'},display:'flex', flexWrap: 'wrap', justifyContent: 'end'}}>
            <h2 className="page__title" style={{ fontSize : '70px'}}>Add New Meal</h2>
            <Input inputValue={makeMeal} name="name" title="Meal's Name" plaseholder="The Meal Name" type="text" />
            <Input inputValue={makeMeal} name="price" title="Meal's Price" plaseholder="The Meal price" type="number" />
            <Input inputValue={makeMeal} name="picture" title="Meal's Picture" type="file" />
            <Input inputValue={makeMeal} name="ingredints" title="Meal's Ingredints" plaseholder="The Meal Ingredints" type="text" />
            <Button variant="contained" color="success" onClick={sendData} sx={{width:"200px", height:'50px', backgroundColor: 'var(--main-color)'}}>Add</Button>
        </Box>
    )
}

export default AddMeal
