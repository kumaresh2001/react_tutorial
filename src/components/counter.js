import React, { Component } from 'react'

class Counter extends Component {
constructor(props) {
    super(props)

    this.state = {
            count:0
         
    }
}
incrementCount()
{
    this.setState(prevState=>({
        count: prevState.count +1
    }),()=>{console.log(this.state.count)}
    )
}
decrementCount()
{
    this.setState({
        count: this.state.count -1
    })
}


    render() {
        return (
            <div>
                Count = {this.state.count}
                <br />
                <button onClick={()=>this.incrementCount()}>Increment</button>
                <br />
                <button onClick={()=>this.decrementCount()}>Decrement</button>
            </div>
        )
    }
}

export default Counter
