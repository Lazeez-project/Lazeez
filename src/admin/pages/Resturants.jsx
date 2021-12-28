import {Box} from "@mui/system";
import Numbers from "../../resturantOwner/components/Numbers";
import OwnerTable from "../../resturantOwner/components/OwnerTable";

import detailes from "../../Json/Details";
// import users from "../../Json/Users";
import rest from "../../Json/Restaurant";
import { useParams } from "react-router";
import axios from "axios";

const Orders = () => {
    const {id} = useParams()
    console.log(id);
    return (
        <Box sx={{maxWidth: '100%', minHeight: '100vh', padding: {xs : '5px' , md : '10px', lg : '20px'}}}>
            <Box 
                className="Number__Box" 
                sx={{
                    width: '100%',
                    padding: {xs : '10px 0', md : '10px 20px' , lg : '10px 40px'},
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap : 'wrap'
                }}
            >
                {
                    detailes.map(item => (
                        <Numbers key={item.id} title={item.title} num={item.count} />
                    ))
                }
            </Box>
            <OwnerTable header={rest.header} body={rest.body} />
        </Box>
    )
}

export default Orders
