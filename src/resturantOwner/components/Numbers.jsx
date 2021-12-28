import Typography from '@mui/material/Typography'
import Paper from "@mui/material/Paper"

const Numbers = (props) => {
    return (
        <Paper 
        className="numCard"
        elevation="3"
         sx={{
            minWidth: "250px",
            p:2,
            display: "inline-block", 
            textAlign: "center",
            borderRadius : "10px", 
            border: "4px solid var(--main-color)",
            margin: '10px'
        }}>
            <Typography variant="h4" marginBottom sx={{fontWeight : 800, color: '#aaa'}}>
                {props.title}
            </Typography>
            <Typography variant="h4" borderBottom>
                {props.num}
            </Typography>
        </Paper>
    )
}

export default Numbers
