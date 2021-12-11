import Box from "@material-ui/core/Box";
import Link from "@mui/material/Link";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsappRoundedIcon from "@mui/icons-material/WhatsappRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "var(--main-color)",
        paddingLeft: 90,
        paddingBottom: 50,
        paddingTop: 50,
        color: "#fff",
      }}
    >
      <h1
        style={{
          paddingBottom: "20px",
          fontFamily: "Poppins",
          fontWeight: "normal",
        }}
      >
        Lazeez
      </h1>
      <Box sx={{ display: "flex", textAlign: "left", paddingLeft: 20 }}>
        <Box
          sx={{
            width: "20%",
            display: "block",
            paddingLeft: 10,
            borderRight: "1px solid #fff",
          }}
        >
          <h2 style={{ fontWeight: "normal", fontSize: "25px" }}>
            Website pages :
          </h2>
          <Link
            href="#"
            target="_blinck"
            underline="none"
            sx={{
              display: "block",
              color: "var(--bg-color)",
              paddingLeft: 4,
              paddingTop: 1,
              paddingBottom: 2,
            }}
          >
            Home
          </Link>
          <Link
            href="#"
            target="_blinck"
            underline="none"
            sx={{
              display: "block",
              color: "var(--bg-color)",
              paddingLeft: 4,
              paddingBottom: 2,
            }}
          >
            Restaurants Explor
          </Link>
          <Link
            href="#"
            target="_blinck"
            underline="none"
            sx={{
              display: "block",
              color: "var(--bg-color)",
              paddingLeft: 4,
              paddingBottom: 2,
            }}
          >
            About
          </Link>
          <Link
            href="#"
            target="_blinck"
            underline="none"
            sx={{ display: "block", color: "var(--bg-color)", paddingLeft: 4 }}
          >
            Team
          </Link>
        </Box>
        <Box
          sx={{
            width: "17%",
            display: "flex",
            flexDirection: "column",
            paddingLeft: 30,
            borderRight: "1px solid #fff",
          }}
        >
          <h2 style={{ fontWeight: "normal", fontSize: "25px" }}>
            Follow us :
          </h2>
          <Link
            underline="none"
            href="https://www.facebook.com/"
            target="_blinck"
            sx={{
              color: "var(--bg-color)",
              paddingLeft: 2,
              paddingTop: 1,
              paddingBottom: 1,
            }}
          >
            <FacebookRoundedIcon /> Facebook
          </Link>
          <Link
            underline="none"
            href="https://www.instagram.com/"
            target="_blinck"
            sx={{ color: "var(--bg-color)", paddingLeft: 2, paddingBottom: 1 }}
          >
            <InstagramIcon /> Instagram
          </Link>

          <Link
            underline="none"
            href="https://web.whatsapp.com/"
            target="_blinck"
            sx={{ color: "var(--bg-color)", paddingLeft: 2, paddingBottom: 1 }}
          >
            <WhatsappRoundedIcon />
            Whatsapp
          </Link>
          <Link
            underline="none"
            href="https://github.com/"
            target="_blinck"
            sx={{ color: "var(--bg-color)", paddingLeft: 2, paddingBottom: 1 }}
          >
            <GitHubIcon />
            GitHub
          </Link>
          <Link
            underline="none"
            href="https://twitter.com"
            target="_blinck"
            sx={{ color: "var(--bg-color)", paddingLeft: 2, paddingBottom: 3 }}
          >
            <TwitterIcon />
            Twitter
          </Link>
        </Box>
        <Box
          sx={{
            width: "20%",
            borderRight: "1px solid #fff",
            paddingLeft: "30px",
          }}
        >
          <h3 style={{ fontSize: "25px", fontWeight: "normal" }}>Our team :</h3>
          <Box
            sx={{
              color: "var(--bg-color)",
              paddingTop: 10,
              lineHeight: "2.5",
              fontSize: "19px",
              paddingLeft: 10,
            }}
          >
            <p>Murawweh Daher</p>
            <p>Mohammed Ubeid</p>
            <p>Mahmoud Nwiry</p>
            <p>Ashjan Nairat</p>
            <p>Nida Awawdeh</p>
          </Box>
        </Box>
        <Box
          sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            paddingLeft: "15px",
          }}
        >
          <h2 style={{ fontWeight: "normal", fontSize: "25px" }}>
            Contact us :
          </h2>
          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <TextField
              style={{
                width: "48%",
                marginRight: "4%",
                marginBottom: "10px",
                backgroundColor: "#fff",
              }}
              required
              type="text"
              variant="outlined"
              placeholder="first name"
              size="small"
            />

            <TextField
              style={{
                width: "48%",
                marginBottom: "10px",
                backgroundColor: "#fff",
              }}
              required
              type="text"
              variant="outlined"
              placeholder="last name"
              size="small"
            />
            <TextField
              style={{
                width: "100%",
                marginBottom: "10px",
                backgroundColor: "#fff",
              }}
              type="email"
              variant="outlined"
              placeholder="exampel@gmail.com"
              size="small"
            />
            <TextareaAutosize
              style={{
                width: "100%",
                backgroundColor: "#fff",
                minHeight: "100px",
              }}
              required
              color="primary"
              placeholder="massage"
              maxRows="4"
            />
          </Box>

          <Button
            variant="outlined"
            sx={{ borderColor: "white", color: "white", marginTop: 2 }}
          >
            Send
          </Button>
        </Box>
      </Box>
      <p style={{textAlign:"center" ,marginTop:90 ,opacity:.5 }}>© 2021. All right reserved</p>
    </Box>
  );
}

export default Footer;
