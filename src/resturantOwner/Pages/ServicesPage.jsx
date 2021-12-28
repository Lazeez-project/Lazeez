import { useState } from "react"
import { Box } from "@mui/system"
import Typography from "@mui/material/Typography"
import Checkbox from "@mui/material/Checkbox"
import Button from "@mui/material/Button"
import { useParams } from "react-router"
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import Fab from "@mui/material/Fab";

const arr = [
    {
        id : 1,
        res : 5,
        check : true
    },
    {
        id : 2,
        res : 5,
        check : true
    },
    {
        id : 3,
        res : 5,
        check : false
    },
    {
        id : 4,
        res : 5,
        check : true
    },
    {
        id : 5,
        res : 5,
        check : false
    },
]

const icon = {
    color: "#fff",
    backgroundColor: "var(--main-color)",
    mb: 1,
    '&:hover': {
        color: 'var(--main-color)',
        backgroundColor: "#fff"
    }
}

function ServicesPage() {

    const { id } = useParams()

    const [services, setServices] = useState([])
    const sendData = () => {
        console.log(services);
    }

    const handelService = (e) => {
        const obj = {
            id : e.target.id,
            resId : id,
            check : e.target.checked
        }
        setServices([...services, obj])
    }

    return (
        <Box sx={{minHeight : '100vh',padding : '50px'}}>
            <Box sx={{display: 'flex', marginBottom: '50px'}}>
                <Box sx={{marginRight : '20px'}}>
                    <Checkbox id="1" onChange={handelService} />
                </Box>
                <Box>
                    <Fab sx={icon}>
                        <FastfoodIcon fontSize="large" />
                    </Fab>
                    <Typography variant="h4" marginBottom="10px" component="div">Fast Food</Typography>
                    <Typography>Providing food and drink services to guests in and restaurants, showing attentiveness, and
                        understanding of their needs and expectations.</Typography>
                </Box>
            </Box>
            <Box sx={{display: 'flex', marginBottom: '50px'}}>
                <Box sx={{marginRight : '20px'}}>
                    <Checkbox id="2" defaultChecked="true" onChange={handelService} />
                </Box>
                <Box>
                    <Fab sx={icon}>
                        <DeliveryDiningIcon fontSize="large" />
                    </Fab>
                    <Typography variant="h4" marginBottom="10px" component="div">Fast Deleviry</Typography>
                    <Typography>Providing food and drink services to guests in and restaurants, showing attentiveness, and
                        understanding of their needs and expectations.</Typography>
                </Box>
            </Box>
            <Box sx={{display: 'flex', marginBottom: '50px'}}>
                <Box sx={{marginRight : '20px'}}>
                    <Checkbox id="3" onChange={handelService} />
                </Box>
                <Box>
                    <Fab sx={icon}>
                        <CoffeeMakerIcon fontSize="large" />
                    </Fab>
                    <Typography variant="h4" marginBottom="10px" component="div">Hot Drinks</Typography>
                    <Typography>Providing food and drink services to guests in and restaurants, showing attentiveness, and
                        understanding of their needs and expectations.</Typography>
                </Box>
            </Box>
            <Box sx={{display: 'flex', marginBottom: '50px'}}>
                <Box sx={{marginRight : '20px'}}>
                    <Checkbox id="4" defaultChecked="true" onChange={handelService} />
                </Box>
                <Box>
                    <Fab sx={icon}>
                        <FastfoodIcon fontSize="large" />
                    </Fab>
                    <Typography variant="h4" marginBottom="10px" component="div">Fast Food</Typography>
                    <Typography>Providing food and drink services to guests in and restaurants, showing attentiveness, and
                        understanding of their needs and expectations.</Typography>
                </Box>
            </Box>
            <Button onClick={sendData}>Save</Button>
        </Box>
    )
}

export default ServicesPage
