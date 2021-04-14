import React from 'react'
class Message extends React.Component{
    constructor()
    {
        super();
        this.state={
            message:"Hello Human"
        }
    }
    changeMessage()
    {
        this.setState({
            message:"BYE BYE HUMAN"
        })
    }
    render()
    {
        return(
            <div> 
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()} >Click Here!!</button>
            </div>
        ) 
    }
}
export default Message