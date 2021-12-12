import { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Checkbox } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';


const MealCard = (props) => {
    const meal = {...props.meal}

    const [count, setCount] = useState(0)
    const [isChecked, setIsChecked] = useState(false)
    const [order, setOrder] = useState({});

    const changeCount = (e)=>{
        setCount(e.target.value)
        console.log(count);
    }

    const addOne = () => {
        setCount(count+1)
        setIsChecked(false);
        setOrder({
            name: meal.title,
            count : count,
            price : (count * meal.price)
        });
    }

    const deleteOne = () => {
        if (count > 0 )
            setCount(count-1)
        setOrder({
            name: meal.title,
            count : count,
            price : (count * meal.price)
        });
    }

    const addToList = () => {
        isChecked ? setIsChecked(false) : setIsChecked(true)
        console.log(order);

    }

    return (
        <Card sx={{ maxWidth: 360 }} style={{boxShadow: "0 10px 20px #00000033", margin: '18px'}}>
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
                        <Checkbox 
                            onChange={addToList}  
                            color="success"
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                            checked={isChecked}
                        />
                        <div className="card__count">
                            <div className="plus" onClick={addOne}>
                                <AddIcon sx={{color:"#fff"}}></AddIcon>
                            </div>
                            <div className="input">
                                <input 
                                    type="number" 
                                    placeholder="0"
                                    value={count}
                                    style={{
                                        width:'70px',
                                        height:'40px',
                                        textAlign:"center",
                                        fontSize:"20px" 
                                    }}
                                    onChange={changeCount}
                                />
                            </div>
                            <div className="plus" onClick={deleteOne}>
                                <HorizontalRuleIcon sx={{color:"#fff"}}></HorizontalRuleIcon>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default MealCard