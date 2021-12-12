import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';


const ResturantCard = (props) => {
    const res = {...props.res}
    return (
        <Card sx={{ maxWidth: 360 }} style={{boxShadow: "0 10px 20px #00000033"}}>
            <CardMedia
                component="img"
                height="140"
                image={res.image.src}
                alt="green iguana"
            />
            <CardContent>
                <Typography variant="h4" component="div" className="card__title" sx={{fontSize : '40px',fontWeight : '500'}}>
                    {res.name}
                </Typography>
                <Typography variant="h6" className="price">
                    {res.location}
                </Typography>
            </CardContent>
            <CardActions>
                <Typography gutterBottom variant="p" className="card__rate">
                    Rate : <Rating name="read-only" value={res.rate} readOnly style={{marginRight : '15px'}} />
                </Typography>
                <Button href={`:${res.id}`} variant="contained" className="btn" style={{backgroundColor : 'var(--main-color)', marginBottom : '10px'}}>More Details</Button>
            </CardActions>
        </Card>
    );
}

export default ResturantCard;



