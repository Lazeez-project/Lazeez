import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
const style = makeStyles({
  add: {
    color: "white",
    backgroundColor: "green",

    height: 30,
    width: 110,

    texttransform: "capitalize",
    marginTop: 20,
    marginLeft: 320,
  },
  label: {
    display: "block",
    margin: "auto",
    textAlign: "right",
  },
  input: {
    marginLeft: "190px ",
  },
  form: {
    width: 500,
    height: 250,
    marginLeft: 500,
    marginTop: 100,
    background: "#EFEFEF",
  },
});

function Admin() {
  const classes = style();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmpassword] = useState("");

  return (
    <form className={classes.form}>
      <label>
        User Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={classes.label}
        />
      </label>

      <label>
        {" "}
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={classes.label}
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          value={Confirmpassword}
          onChange={(e) => setConfirmpassword(e.target.value)}
          className={classes.label}
        />
      </label>

      <input type="submit" value="Add" className={classes.add} />
    </form>
  );
}
export default Admin;
