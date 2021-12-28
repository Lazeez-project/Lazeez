import { NavLink } from "react-router-dom"
import { Box } from "@mui/system"
import Typography from "@mui/material/Typography";

import RoomServiceIcon from '@mui/icons-material/RoomService';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = (props) => {

    return (
        <Box sx={{maxWidth: {xs:'70px', lg:'20%'}, flex:2 ,backgroundColor: "#45CE67",minHeight: '100vh'}}>
            <Typography className="sidebar__title" variant="body" component="h2" sx={{ fontWeight : 600,margin: '50px 0' ,display:{xs: 'none',lg:'block'}}}>Restaurant Owner</Typography>
            <ul className="sidebar__list">
                <li><NavLink to={`/resturant/owner/dashboard/${props.id}/`} ><RoomServiceIcon/><Typography noWrap="true" sx={{display:{xs: 'none',lg:'block'}}}>Orders</Typography></NavLink></li>
                <li><NavLink to={`/resturant/owner/dashboard/${props.id}/mymeals`} ><LunchDiningIcon/><Typography noWrap="true" sx={{display:{xs: 'none',lg:'block'}}}>My Meals</Typography></NavLink></li>
                <li><NavLink to={`/resturant/owner/dashboard/${props.id}/addmeal`} ><AddIcon/><Typography noWrap="true" sx={{display:{xs: 'none',lg:'block'}}}>Add Meal</Typography></NavLink></li>
                <li><NavLink to={`/resturant/owner/dashboard/${props.id}/updatedata`} ><EditIcon/><Typography noWrap="true" sx={{display:{xs: 'none',lg:'block'}}}>Update Data</Typography></NavLink></li>
                <li><NavLink to={`/resturant/owner/dashboard/${props.id}/services`} ><HomeRepairServiceIcon/><Typography noWrap="true" sx={{display:{xs: 'none',lg:'block'}}}>Services</Typography></NavLink></li>
                <li><NavLink to={`/resturant/owner/dashboard/${props.id}/changepassword`} ><VpnKeyIcon/><Typography noWrap="true" sx={{display:{xs: 'none',lg:'block'}}}>Change Password</Typography></NavLink></li>
                <li><NavLink to={`../../`}><LogoutIcon/><Typography noWrap="true" sx={{display:{xs: 'none',lg:'block'}}}>Log out</Typography></NavLink></li>
            </ul>
        </Box>
    );
}

export default Sidebar
