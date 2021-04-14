import React, { Component } from 'react'

class EventBindButton extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            message:"Hello",
            count:0
        }
        this.changeContent =  this.changeContent.bind(this)
    }
    changeContent()
        {
            this.setState(prevState=>({count:prevState.count+1}),()=>{
                if(this.state.count%2===0)
                {
                    this.setState({message:"Hello"})
                    return;
                }
                this.setState({message:"BEEBO!!!"})})
            
        }
        
    render() {
        return (
            <div>
                <button onClick={this.changeContent}>Click Me</button>
                <div>{this.state.message}</div>
            </div>
        )
    }
}

export default EventBindButton
