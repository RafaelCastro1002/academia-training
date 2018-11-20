import React, {Component} from 'react'
import './container.css'

class container extends Component{
    
    render(){
        return(
            <div id="container">
                {this.props.children}
            </div>
        )
    }
}

export default container