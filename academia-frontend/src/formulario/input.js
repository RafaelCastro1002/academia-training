import React, {Component} from 'react'
import './formulario.css'

class input extends Component{

    render(){
        return(
            <div>
                <div>
                    <label className={this.props.label}>{this.props.name_campo}</label>
                </div>
                <div>
                    <input className={this.props.className} type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} required={this.props.required}/>
                </div>
                <br />
            </div>
        )
    }
}

export default input