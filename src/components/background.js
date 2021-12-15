import React from 'react';
import Rating from '@mui/material/Rating';
import background from "../picture/background.jpg";
import download from "../picture/download.jpg";
import backgroundslide from "../picture/backgroundslide.png";
import restrant from "../picture/restrant.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import { SocialIcon } from 'react-social-icons';
import { Button } from "@material-ui/core";

import SimpleImageSlider from "react-simple-image-slider";


const useStyles = makeStyles({
  titleItemRight: {
    color: "white",
    backgroundColor: "green",
    height: 40,
    width: 120,
    marginLeft: "40px",
    marginTop: "40px",
    textTransform: "capitalize",
  },

  html: {
    background: "#ECECEC",
  },
  h2: {
    position: "absolute",
    width: "392px",
    height: "66.44px",
    left: "80px",
    top: "45px",
    fontfamily: "Cairo",
    fontstyle: "normal",
    fontweight: "normal",
    fontsize: "50px",
    lineheight: "66px",
    display: "flex",
    color: "#007200",
  },
  h4: {
    fontfamily: "Cairo",
    fontweight: "bold",
    fontsize: "100px",
    display: "flex",
    alignitems: "center",
    color: "#00000",
  },
  h3: {
    width: "392px",
    height: "30px",
    marginLeft: "200px",
    fontfamily: "Cairo",
    fontstyle: "normal",
    fontweight: "normal",
    fontsize: "50px",
    display: "flex",
    color: "#007200",
  },
  photo: {
    height: "590px",
    width: " 75%",

    marginTop: "2%",
    marginLeft: "100px",
  },
  Item: {
    align: "left",
  },
});


const images = [
  { url: backgroundslide },
  { url: restrant },

  { url: background },
  { url: download },
];

const Background = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
      
  return (
    <div className={classes.html}>
      <div>
        <div className="button" style={{ marginLeft: "60%" }}>
          <Button
            variant="text"
            type="submit"
            className={classes.titleItemRight}
          >
            Menue
          </Button>

          <Button
            type="submit"
            variant="text"
            className={classes.titleItemRight}
          >
            Book Atable
          </Button>

          
        </div>

        <div className="heading">
          <Typography
            style={{ marginLeft: "190px" }}
            variant="h4"
            className={classes.h3}
          >
            Resturant Name
          </Typography>

          <Typography style={{ marginLeft: "190px" }}>
            Gaza, Nusirat, Rashed st.
          </Typography>
        </div>
        <div>
          <SimpleImageSlider
            autoPlay={true}
            autoPlayDelay={4}
            width={896}
            height={304}
            images={images}
            showBullets={true}
            showNavs={true}
            style={{ marginTop: "50px", marginLeft: "200px" }}
          />
        </div>
      </div>

      <div
        className="AboutRestaurant"
        style={{ marginLeft: "190px", marginTop: "20px" }}
      >
        <Typography variant="h5" className={classes.h3}>
          About Restaurant :
        </Typography>

        <Typography className={classes.h4}>
          <span className="span" style={{ fontWeight: "bold" }}>
            Avilable Hours
          </span>
          : 5:00 am - 9:00pm
        </Typography>

        <Typography className={classes.h4}>
          <span style={{ fontWeight: "bold" }}>Avilable Days</span>: satrday -
          thursday
        </Typography>

        <Typography className={classes.h4}>
          <span style={{ fontWeight: "bold" }}> Rating</span>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Typography>
      </div>

      <div
        className="Contact"
        style={{ marginLeft: "190px", marginTop: "20px" }}
      >
        <Typography variant="h6" className={classes.h3}>
          <span style={{ fontWeight: "bold" }}> Contact : </span>
        </Typography>

        <span style={{ fontWeight: "bold" }}>
          {" "}
          Phone: <phone>:970555555 </phone>{" "}
        </span>

        <Typography>
          <span style={{ fontWeight: "bold" }}> Email : </span>:
          <a href="mailto: abc@example.com">Lazez@example.com</a>
        </Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}> Social Media : </span>
          <SocialIcon
            url="https://twitter.com/Lazez"
            style={{ height: 25, width: 25, margin: 3 }}
            bgColor="	#808080"
            border={20}
          />
          <SocialIcon
            url="https://linkedin.com/in/Lazez"
            style={{ height: 25, width: 25, margin: 3 }}
            bgColor="	#808080"
          />
          <SocialIcon
            url="https://facebook.com/in/Lazez"
            style={{ height: 25, width: 25, margin: 3 }}
            bgColor="	#808080"
          />
          <SocialIcon
            url="https://instagram.com/in/Lazez"
            style={{ height: 25, width: 25, margin: 3 }}
            bgColor="	#808080"
          />
        </Typography>
      </div>
    </div>
  );
};

export default Background;