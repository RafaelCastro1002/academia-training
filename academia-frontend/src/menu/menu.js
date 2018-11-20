import React, {Component} from 'react'
import Bloco from './blocosOpcoes'
import './menu.css'

class menu extends Component{

    render(){
        return(
            <div className="menu">
                <Bloco title="Alunos"/>
                <Bloco title="Cadastrar Alunos"/>
                <Bloco title="Horários"/>
            </div>
        )
    }
}

export default menu