import React from 'react'

const Button = ({color,text, one}) => {
        
    return (
        <button onClick = {one} style={{backgroundColor:color}} className = 'btn'>{text}</button>
    )
}

export default Button
