import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

const MealCardOwner = (props) => {
    const meal = {...props.meal}

    return (
        <Card sx={{ maxWidth: 340 ,boxShadow: "0 10px 20px #00000033", margin: '18px'}} >
            <CardMedia
                component="img"
                height="200"
                image={meal.image.src}
                alt={meal.image.title}
            />
            <CardContent>
                <Typography variant="h4" component="div" className="card__title" sx={{fontSize : '40px',fontWeight : '500'}}>
                    {meal.title}
                </Typography>
                <Typography gutterBottom variant="p" className="card__rate">
                    Rate : <Rating name="read-only" value={meal.rate} readOnly />
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Ingredints :
                    <ul className="ingredints">
                        {meal.ingredints.map((item, index)=>(
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </Typography>
                <div className="card__footer">
                    <Typography variant="h5" className="price">
                        Price : <span>{`${meal.price}$`}</span>
                    </Typography>
                    <div className="card__inputs">
                        <Button href={`editmeal/${meal.id}`} variant="contained" className="btn" style={{backgroundColor : 'var(--main-color)', marginBottom : '10px'}}>Edit</Button>
                        <Button variant="contained" className="btn" style={{backgroundColor : '#e63946', marginBottom : '10px', marginLeft: '10px'}}>Delete</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default MealCardOwner
