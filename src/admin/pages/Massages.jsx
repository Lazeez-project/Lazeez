import {useState} from 'react'
import {Box} from '@mui/system'
import Massage from '../components/Massage'

const msgs = [
    {
        id : 1,
        name : 'ali ali',
        email : 'ali@gmail.com',
        massage : 'Hello my name is ali I want to join to your website, plaese accept me'
    },
    {
        id : 2,
        name : 'ali ali',
        email : 'ali@gmail.com',
        massage : 'Hello my name is ali I want to join to your website, plaese accept me'
    },
    {
        id : 3,
        name : 'ali ali',
        email : 'ali@gmail.com',
        massage : 'Hello my name is ali I want to join to your website, plaese accept me'
    },
    {
        id : 4,
        name : 'ali ali',
        email : 'ali@gmail.com',
        massage : 'Hello my name is ali I want to join to your website, plaese accept me'
    },
    {
        id : 5,
        name : 'ali ali',
        email : 'ali@gmail.com',
        massage : 'Hello my name is ali I want to join to your website, plaese accept me'
    },
    {
        id : 6,
        name : 'ali ali',
        email : 'ali@gmail.com',
        massage : 'Hello my name is ali I want to join to your website, plaese accept me'
    },
    {
        id : 7,
        name : 'ali ali',
        email : 'ali@gmail.com',
        massage : 'Hello my name is ali I want to join to your website, plaese accept me'
    },
    {
        id : 8,
        name : 'ali ali',
        email : 'ali@gmail.com',
        massage : 'Hello my name is ali I want to join to your website, plaese accept me'
    },
    {
        id : 9,
        name : 'ali ali',
        email : 'ali@gmail.com',
        massage : 'Hello my name is ali I want to join to your website, plaese accept me'
    },
    {
        id : 10,
        name : 'ali ali',
        email : 'ali@gmail.com',
        massage : 'Hello my name is ali I want to join to your website, plaese accept me Hello my name is ali I want to join to your website, plaese accept me Hello my name is ali I want to join to your website, plaese accept me'
    },
]

const Massages = () => {
    return (
        <Box sx={{margin : '0 auto',width :'100%', minHeight: '60vh', padding : {xs: '10px', md: '30px', lg: '50px'},display:'flex', flexWrap: 'wrap', justifyContent : 'space-around'}}>
            {
                msgs.map(msg => (
                    <Massage key={msg.id} name={msg.name} email={msg.email} massage={msg.massage} />
                ))
            }
        </Box>
    )
}

export default Massages
