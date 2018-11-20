import React, { Component } from 'react'
import './header.css'

class header extends Component{

    render(){

        function definirClassName(className){
            if(className !== undefined){
                return className
            }else{
                return 'header'
            }
        }

        const className = definirClassName(this.props.className);

        return(
            <div className={className}>PowerFit</div>
        )
    }
}

export default header;