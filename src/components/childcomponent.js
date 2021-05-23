import React, { Component } from 'react'

 class ChildComponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              
         }
         
    }
     
    render() {
        return (
            <div>
                <button onClick={this.props.childfunction} >Click Me!!</button>            
            </div>
        )
    }
}

export default ChildComponent
