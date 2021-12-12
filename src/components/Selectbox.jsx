import { useState } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Selectbox = (props) => {
    
    const [value, setValue] = useState('');

    const handleChange = (event) => {
      setValue(event.target.value);

      setTimeout(()=>{console.log(value)},2000);
    };
  
    return (
        <Box sx={{ minWidth: 300}}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
            <Select
                sx={{ backgroundColor: '#fff' }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label={props.label}
                onChange={handleChange}
            >
            {
                props.values.map((item,index)=>(
                    <MenuItem key={index} value={item.value}>{item.text}</MenuItem>
                ))
            }
            </Select>
          </FormControl>
        </Box>
      );
}

export default Selectbox
