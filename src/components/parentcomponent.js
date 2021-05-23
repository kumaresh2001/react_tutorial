import React, { Component } from 'react'
import ChildComponent from './childcomponent'
class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ParentName:"Parent"
            }
        this.ParentFunction = this.ParentFunction.bind(this)
    }
    ParentFunction()
    {
        alert(`Hello  ${this.state.ParentName}`)
    }
    render() {
        return (
            <div>
                <ChildComponent childfunction ={this.ParentFunction} />     
            </div>
        )
    }
}

export default ParentComponent 
