import React, {Component} from 'react'
import './blocosOpcoes.css'

class blocos extends Component{

    render(){
        return(
            <div id="bloco">{this.props.title}</div>
        )
    }
} 

export default blocos