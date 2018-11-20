import React, {Component} from 'react'
import './botao.css'

class botao extends Component{

    render(){
 
        if(this.props.formatacaoEspecial){
            var className = `${this.props.formatacaoEspecial}`
        }else{
            var className = `${this.props.cor} modelo`
        }

        return(
            <button className={className} onClick={this.props.loading}>{this.props.name}</button>
        )
    }
}

export default botao