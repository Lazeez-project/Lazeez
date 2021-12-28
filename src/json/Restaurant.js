import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { color } from "@mui/system";

const handleClickActive = (event, cellValues) => {
    console.log(cellValues.row);
};
const handleClick = (event, cellValues) => {
    console.log(cellValues.row.id);
};

const rest = {
    header : [
        { field: 'name', minWidth: 200 },
        { field: 'location', minWidth: 200 },
        { field: 'phone', minWidth: 150 },
        { field: 'email', minWidth: 240 },
        { field: 'state', minWidth: 100 },
        {
            field: "Control",
            align : "center",
            minWidth: 300,
            renderCell: (cellValues) => {
                let isActive = cellValues.row.state == 'active' ? true : false
                return  <div>
                            <Button
                                sx={{margin: "3px"}}
                                variant="contained"
                                color="primary"
                                size="small"
                                onClick={(event) => {
                                    handleClick(event, cellValues);
                                }}
                                href={`updateRes/${cellValues.row.id}`}
                            >
                                Update
                            </Button>

                            <Button
                                href={`editdata?${cellValues.row.id}`}
                                size="small"
                                sx={{
                                    margin: "3px",
                                    backgroundColor: isActive ? '#E08E12' : '#07C13B',
                                    width: '92px',
                                    ':hover':{backgroundColor: isActive ? '#dfa900' : '#008000'}
                                }}
                                variant="contained"
                                onClick={(event) => {
                                    handleClickActive(event, cellValues);
                                }}
                            >
                                {isActive ? 'Disactive' : 'Active'}
                            </Button>
                            

                            <Button
                                sx={{margin: "3px"}}
                                variant="contained"
                                color="error"
                                size="small"
                                onClick={(event) => {
                                    handleClick(event, cellValues);
                                }}
                                href={`#`}
                            >
                                Delete
                            </Button>
                        </div>;
            }
        }
    ],
    body : [
        {id:1, name:"Mahmoud Hamdan", location:"Nusirat", phone:"0591234567",email:"mmm@gmail.com", state:'active'},
        {id:2, name:"Mahmoud Hamdan", location:"Nusirat", phone:"0591234567",email:"mmm@gmail.com", state:'disactive'},
        {id:3, name:"Mahmoud Hamdan", location:"Nusirat", phone:"0591234567",email:"mmm@gmail.com", state:'disactive'},
        {id:4, name:"Mahmoud Hamdan", location:"Nusirat", phone:"0591234567",email:"mmm@gmail.com", state:'active'},
        {id:5, name:"Mahmoud Hamdan", location:"Nusirat", phone:"0591234567",email:"mmm@gmail.com", state:'disactive'},
        {id:6, name:"Mahmoud Hamdan", location:"Nusirat", phone:"0591234567",email:"mmm@gmail.com", state:'active'},
        {id:7, name:"Mahmoud Hamdan", location:"Nusirat", phone:"0591234567",email:"mmm@gmail.com", state:'active'},
        {id:8, name:"Mahmoud Hamdan", location:"Nusirat", phone:"0591234567",email:"mmm@gmail.com", state:'active'},
        {id:9, name:"Mahmoud Hamdan", location:"Nusirat", phone:"0591234567",email:"mmm@gmail.com", state:'disactive'}
    ]
}


export default rest;