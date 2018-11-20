import React, {Component} from 'react'
import './formulario.css'

class formulario extends Component{

    render(){
        return(
            <form className={this.props.className} name={this.props.name} onSubmit={this.props.onSubmit}>
                {this.props.children}
            </form>
        )
    }
}

export default formulario