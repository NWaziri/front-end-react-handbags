import React from "react"

function Button({ text, state}) {
    return (
        <button type="button" disabled={state}
        onClick= {() => console.log(text)}
        > {text} 
        </button>
    )
}

export default Button



