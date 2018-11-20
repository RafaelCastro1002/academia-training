import React, {Component} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroAluno from './cadastroAluno/cadastroAluno'
import Login from './login/login' 
import Cadastro from './cadastro/cadastro'

class router extends Component{

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/alunos/cadastro" component={CadastroAluno} />
                    <Route path="/login" component={Login} />
                    <Route path="/cadastro" component={Cadastro}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default router;