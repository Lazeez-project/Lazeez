import React from 'react'
import { Box } from '@mui/system'

import PendingBox from '../components/PendingBox'

const pendingRes = [
    {
      id: 1,
      name: "########",
      location: "#########",
      phoneNumber: "0599999",
      email: "Example@ex.com",
    },
    {
      id: 2,
      name: "########",
      location: "#########",
      phoneNumber: "0599999",
      email: "Example@ex.com",
    },
    {
      id: 3,
      name: "########",
      location: "#########",
      phoneNumber: "0599999",
      email: "Example@ex.com",
    },
    {
      id: 4,
      name: "########",
      location: "#########",
      phoneNumber: "0599999",
      email: "Example@ex.com",
    },
    {
      id: 5,
      name: "########",
      location: "#########",
      phoneNumber: "0599999",
      email: "Example@ex.com",
    },
    {
      id: 6,
      name: "########",
      location: "#########",
      phoneNumber: "0599999",
      email: "Example@ex.com",
    },
];

const Pending = () => {
    return (
        <Box 
            sx={{
                maxWidth: '100%', 
                minHeight: '100vh', 
                padding: '50px', 
                display: 'flex', 
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignContent: 'flex-start'
            }}>
            {
                pendingRes.map(res => (
                    <PendingBox key={res.id} data={res} />
                ))
            }
        </Box>
    )
}

export default Pending
