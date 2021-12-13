

import React, { Component } from "react";

export default class Pending extends Component {

    
    
    render() 
   
  
    {
        const buttonstyle = {         
 margin:"10px 180px",
fontfamily: "Poppins",
fontstyle: "normal",
fontweight:"normal",
fontsize: "18px",
lineheight: "27px", 
alignitems: "center",
 textalign: "center",
color: "#FFFFFF",
backgroundColor:"#007200",

       }
 
        const resturanttList = this.props.Resturant.map(Resturant => {
        
            return (
                   
                <li key={Resturant.id} style={{    backgroundColor: "white"  ,paddingLeft:"10px",border:"3px solid #A4A4A2" ,boxsizing:"borderbox"  ,margin:"60px"  ,width:"250px" ,display:"inline-block"}}>
               
       
              <p> Name :{Resturant.name}</p>
               <p>
                 Location: {Resturant.Location}
          </p>
           <p>
                    PhoneNumber: {Resturant.PhoneNumber}
              </p>
                <p>
                    Email: {Resturant.Email}
          </p>

                    <button onclick="activate()" style={buttonstyle}>
  Activate 
</button>
        </li>
         

     );  });
    return (
      <div>
 
        <ul  style={{display:'inlineblock'}} >{resturanttList }</ul>
      </div>
    );
  }
}

// Specifies the default values for props:
Pending.defaultProps = {
Resturant: [
    {
      id: 0,
        name: "########",
      Location:"#########" ,
        PhoneNumber: "0599999",
      Email :"Example@ex.com"
    },
    {
      id: 1,
       name: "########",
    Location:"#########" ,
       PhoneNumber: "0599999",
      Email :"Example@ex.com"
    },
    {
      id: 2,
         name: "########",
    Location:"#########" ,
       PhoneNumber: "0599999",
      Email :"Example@ex.com"
      
    },
    {
      id: 3,
         name: "########",
    Location:"#########" ,
         PhoneNumber: "0599999",
      Email :"Example@ex.com"
   
        }
    ,
    {
      id: 4,
        name: "########",
    Location:"#########" ,
        PhoneNumber: "0599999",
      Email :"Example@ex.com"
   
        }
    ,
    {
      id: 5,
        name: "########",
    Location:"#########" ,
        PhoneNumber: "0599999",
      Email :"Example@ex.com"
   
    } 

  ]
};