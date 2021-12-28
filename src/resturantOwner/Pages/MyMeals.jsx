import { Typography } from "@mui/material"
import {Box} from '@mui/system'

import MealCardOwner from "../components/MealCardOwner"
import meals from "../../Json/Meals"
import { useParams } from "react-router"


const MyMeals = () => {

    

    const {id} = useParams();
    
    return (
        <Box sx={{maxWidth: '100%', minHeight: '100vh', padding : {xs : '10px' , lg : '50px'} }}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems : 'center',margin:"15px 0"}}>
                <Typography 
                    variant="h3" 
                    sx={{
                        marginLeft: '18px',
                        fontWeight: 600, 
                        color: 'var(--main-color)'
                    }}>
                        My Meals :
                </Typography>
            </Box>
            <Box sx={{ flexWrap : 'wrap' ,display: 'flex', justifyContent: 'space-around' ,}}>
            {
                meals.map(item => (
                    <MealCardOwner key={item.id} meal={item} />
                ))
            }
            </Box>
        </Box>
    )
}

export default MyMeals
