import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
const style = makeStyles({
  Save: {
    color: "white",
    backgroundColor: "green",

    height: 30,
    width: 110,

    texttransform: "capitalize",
    marginTop: 20,
    marginLeft: 320,
  },
  input: {
    background: "#EFEFEF",
  },
  label: {
    display: "block",
    margin: "auto",
    textAlign: "right",
  },
  form: {
    width: 500,
    height: 250,
    marginLeft: 500,
    marginTop: 100,
    background: "#EFEFEF",
  },
});



function Changepassword() {
    const classes = style();
    const [Newpassword, setNewPassword] = useState("");
    const [OldPassword, setOldPassword] = useState("");
         const [Confirmpassword, setConfirmpassword] = useState("");

    return (
        <form className={classes.form}>
            
                   <label> Old Password: 
                <input
                    type="password"
                    value={OldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    className={classes.label}
                />
            </label>
            <label>New password:
                <input
                    type="text"
                    value={Newpassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className={classes.label}
                />
            </label>

       
                 <label>Confirm Password:
                <input
                    type="password"
                    value={Confirmpassword}
                    onChange={(e) => setConfirmpassword(e.target.value)}
                    className={classes.label}
                />
            </label>

                  <input type="submit" value="Save"  className={classes.Save}/>
        </form>
    )
}
    export default Changepassword