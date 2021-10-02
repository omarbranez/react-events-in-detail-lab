// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

    handleClick = (event) => {
        // const delay = this.props.delay
        event.persist() // stop event object from returning to the pool, since we have two listeners
        window.setTimeout(()=>{this.props.onDelayedClick(event)}, this.props.delay) // always in {} typescript
    }

    
    render(){
        return(
            <button
                onClick={this.handleClick}
            />
        )   
    }
}