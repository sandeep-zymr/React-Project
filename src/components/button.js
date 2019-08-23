import React from 'react'
const Button = (props) => {

    return(
        <div>
            <button onClick = {props.action} >{props.buttonTitle}</button>
        </div>
    )
}

const Input = (props) => {

    return(
        <div>
            <Input onClick = {props.action}  type="{props.type}" name="{props.name}">
        </div>
    )
}
export default Button