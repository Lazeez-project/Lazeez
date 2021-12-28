import {Box} from '@mui/system'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'

// Icons
import DeleteIcon from '@mui/icons-material/Delete'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const Massage = (props) => {
    return (
        <Box sx={{
            // minWidth : '250px',
            // maxWidth : {xs: '250px', md:'300px', lg: '350px'},
            minWidth : '100%',
            margin : {xs : '5px' , lg : '10px'},
            padding : 0,
            backgroundColor : '#fff',
            border : '2.5px solid var(--main-color)',
            borderRadius : '8px',
            overflow : 'hidden',
            boxSizing : 'border-box'
        }}>
            
            <Box sx={{
                width : "100%",
                display : 'flex',
                justifyContent : 'space-between',
                padding : '10px 20px',
                borderBottom : '2px solid #777777',
                backgroundColor : 'var(--main-color)'
            }}>
                <Typography variant='body1' component='body1' sx={{fontWeight : 500 ,color: '#ddd'}}>{props.name}</Typography>
                <Typography variant="body1" component='body1' sx={{fontWeight : 500 ,color: '#ddd'}}>{props.email}</Typography>
            </Box>
            <Box sx={{margin: '0 20px' ,display: 'flex', justifyContent: 'space-between'}}>
                <Checkbox id={props.id} /> 
                <Box>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <Checkbox 
                        icon={<StarBorderIcon />}
                        checkedIcon={<StarIcon/>}
                    />
                </Box>
            </Box>
            <Typography variant="body1" component='h6' sx={{padding: '0 20px 5px' ,color: '#666'}}>
                {props.massage}
            </Typography>
        </Box>
    )
}

export default Massage