import React from 'react';
const Paragraph = ({text, bgColor, bool}) => {
    console.log(bool)
    return (
       bool ? <p style = {{backgroundColor: `${bgColor}`}}>
            <code>{text}</code>
      
      </p> : "Bool is false"
    )
}
export default Paragraph;