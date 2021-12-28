import React from "react";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import Fab from "@mui/material/Fab";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

const service = {
    flexGrow: 1,
    pb: 4,
}
const icon = {
    color: "var(--ternary)",
    backgroundColor: "var(--primary)",
    mb: 1,
    '&:hover': {
        color: 'var(--secondary)',
        backgroundColor: "var(--ternary)"
    }
}
const Services = () => {
    return (
        <Box
            sx={{
                pt: 6,
            }}
        >
            <Typography variant="h4" gutterBottom >Restaurant Services :</Typography>
            <Box
                sx={{
                    pt: 4,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' }
                }}
            >
                <Box sx={service}>
                    <Fab sx={icon}>
                        <FastfoodIcon fontSize="large" />
                    </Fab>
                    <Typography variant="h6" gutterBottom>Fast food</Typography>
                    <Typography variant="body2" gutterBottom>
                        Providing food and drink services to guests in and restaurants, showing attentiveness, and
                        understanding of their needs and expectations.
                    </Typography>
                </Box>
                <Box sx={service}>
                    <Fab sx={icon}>
                        <DeliveryDiningIcon fontSize="large" />
                    </Fab>
                    <Typography variant="h6" gutterBottom>Fast Delivery</Typography>
                    <Typography variant="body2" gutterBottom>
                        Providing food and drink services to guests in and restaurants, showing attentiveness, and
                        understanding of their needs and expectations.
                    </Typography>
                </Box>
                <Box sx={service}>
                    <Fab sx={icon}>
                        <CoffeeMakerIcon fontSize="large" />
                    </Fab>
                    <Typography variant="h6" gutterBottom>Hot Drinks</Typography>
                    <Typography variant="body2" gutterBottom>
                        Providing food and drink services to guests in and restaurants, showing attentiveness, and
                        understanding of their needs and expectations.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
export default Services
