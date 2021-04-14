import React from 'react'

function ButtonClick() {
    function buttonClick()
    {
        console.log("Button clicked!!")
    }
    return (
        <div>
            <button onClick={buttonClick}>Click</button>
        </div>
    )
}

export default ButtonClick
