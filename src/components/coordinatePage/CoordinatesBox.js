import React from 'react';



const CoordinatesBox = ({Image, header, content, fontFamily, color, headerColor}) => {
  return (
    <div style={{ justifyContent:'spaceEvenly', 
                 display:'flex', 
                 flexDirection:'column',
                  height:'100%', 
                  padding:'5%'}}
                  >
        <div style={{ width:'100%', height:'20%'}}>
            <img src={Image} alt=""/>
        </div>
        <div className="" 
        style={{ width:'100%', 
                height:'30%', 
                alignItems:'center', 
                justifyContent:'flexStart', 
                display:'flex', 
                fontFamily:{fontFamily}, 
                fontWeight:'bold',
                color: "#272727"}}
        >
            {header}
        </div>
        <div className="" 
        style={{ width:'100%', 
            height:'50%', 
            fontFamily:{fontFamily}, 
            color: '#6F6F6F'}}
        >
            {content}
        </div>
    </div>
  );
};

export default CoordinatesBox;