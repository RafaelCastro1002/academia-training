import React, {Component} from 'react'
import './janela.css'

class janela extends Component{

    render(){

        // var className = classNames({
        //     janela: "janela"
        // })

        if(this.props.className){
            var className = `${this.props.className}`
        }else{
            var className = `janela`
        }
            

        return(
            <div className={className}>
                <div id="header-janela">{this.props.title}</div>
                <div id="conteudo-janela">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default janela