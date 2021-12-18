import React from "react";
import Rating from "@mui/material/Rating";
import background from "../picture/background.jpg";
import download from "../picture/download.jpg";
import backgroundslide from "../picture/backgroundslide.png";
import londrestrunt from "../picture/londrestrunt.jpg";
import restrant from "../picture/restrant.jpg";
import restra from "../picture/restra.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import { Button } from "@material-ui/core";
import { FaFacebook } from "react-icons/fa";
import Box from "@mui/material/Box";

import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import SimpleImageSlider from "react-simple-image-slider";

const useStyles = makeStyles({
  titleItemRight: {
    color: "white",
    backgroundColor: "green",
    height: 40,
    width: 120,
    marginLeft: "800px",
    marginTop: "5px",
    textTransform: "capitalize",
  },
  AvailableDays: {
    color: "red",
  },
});

const About = {
  name: {
    Name: "Lazezz Resturant",
    Location: "   Gaza, Nusirat, Rashed st.",
  },
  time: {
    Availablehours: "08:00-16:00",
    AvailableDays: "St MO Tu We Thr",
  },
  contact: {
    phonenumber: "6767767",
    email: "lazees@example.com",
    rate: "2",
    value: "3",
  },
  SocialIcon: {
    instgramUrl: "https://www.instagram.com/mena.alliances/",
    facebookUrl: "https://www.facebook.com/MENAALLIANCES",
    twitterURL: "https://twitter.com/",
    linkedinURL: "https://www.linkedin.com/",
  },
};
const AvailableDays = {
  st: "St",
  sn: "Sn",
  MO: "Mo",
  Tu: "Tu",
  We: "We",
  Thr: "Thr",
};

const images = [
  { url: backgroundslide },
  { url: restrant },

  { url: background },
  { url: download },
  { url: londrestrunt },
  { url: restra },
];

const Background = () => {
  const classes = useStyles();

  return (
    <div className={classes.html}>
      <div className="name" style={{ marginLeft: "200px", marginTop: "10px" }}>
        <h2 style={{ color: "green" }}>{About.name.Name}</h2>

        <p>{About.name.Location}</p>

        <Button variant="text" type="submit" className={classes.titleItemRight}>
          Menu
        </Button>
      </div>
      <div className="background">
        <SimpleImageSlider
          autoPlay={true}
          autoPlayDelay={4}
          width={896}
          height={324}
          images={images}
          showBullets={true}
          showNavs={true}
          style={{ marginTop: "50px", marginLeft: "200px" }}
        />
      </div>

      <div
        className="AboutRestaurant"
        style={{ marginLeft: "200px", marginTop: "30px" }}
      >
        <Typography style={{ fontWeight: "900", color: "green" }}>
          About Restaurant
        </Typography>
        <Box sx={{ fontWeight: 500, ml: 2.5 }}>
          Available Hours: {About.time.Availablehours}
        </Box>
        <Box
          sx={{
            fontWeight: 520,
            ml: 2.5,
            display: "flex",
            flexDirection: "row",
          }}
        >
          Available Days :
          <Box
            sx={{
              fontWeight: 520,
              ml: 2.5,
              border: "solid green 2px",
              background: "green",
              width: 50,
              height: 40,
              textAlign: "center",
            }}
          >
            {AvailableDays.st}
          </Box>
          <Box
            sx={{
              fontWeight: 520,
              ml: 2.5,
              border: "solid green 2px",
              background: "green",
              width: 50,
              height: 40,
              textAlign: "center",
            }}
          >
            {AvailableDays.MO}
          </Box>
          <Box
            sx={{
              fontWeight: 520,
              ml: 2.5,
              border: "solid green 2px",
              background: "green",
              width: 50,
              height: 40,
              marginLeft: 4,
              textAlign: "center",
            }}
          >
            {AvailableDays.Tu}
          </Box>
          <Box
            sx={{
              fontWeight: 520,
              ml: 2.5,
              border: "solid green 2px",
              background: "green",
              width: 50,
              height: 40,
            }}
          >
            {AvailableDays.We}
          </Box>
          <Box
            sx={{
              fontWeight: 520,
              ml: 2.5,
              border: "solid green 2px",
              background: "green",
              width: 50,
              height: 40,
              textAlign: "center",
            }}
          >
            {AvailableDays.Thr}
          </Box>
        </Box>

        <Box sx={{ fontWeight: 500, ml: 2.5 }}>
          Rating
          <Rating
            name="simple-controlled"
            value={About.contact.value}
            onChange={About.contact.rate}
          />
        </Box>
      </div>

      <div
        className="contact"
        style={{ marginLeft: "200px", marginTop: "10px" }}
      >
        <Typography style={{ fontWeight: "900", color: "green" }}>
          Contact
        </Typography>
        <Typography component="div">
          <Box sx={{ fontWeight: 500, ml: 2.5 }}>
            Phone Number:
            {About.contact.phonenumber}
            <p>Email: {About.contact.email}</p>
            <p>
              Social Media :
              <a href={About.SocialIcon.facebookUrl}>
                <FaFacebook style={{ color: "blue", marginLeft: "5px" }} />
              </a>
              <a href={About.SocialIcon.instgramUrl}>
                <FaInstagram style={{ color: "red", marginLeft: "5px" }} />
              </a>
              <a href={About.SocialIcon.twitterURL}>
                <FaTwitter style={{ color: "blue", marginLeft: "5px" }} />
              </a>
              <a href={About.SocialIcon.linkedinURL}>
                <FaLinkedin style={{ color: "blue", marginLeft: "5px" }} />
              </a>
            </p>
          </Box>
        </Typography>
      </div>
    </div>
  );
};

export default Background;
