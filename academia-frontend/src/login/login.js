import React, {Component} from 'react'
import Form from '../formulario/formulario'
import Input from '../formulario/input'
import Botao from '../botao/botao'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './login.css'

const serverLoginURL = 'http://localhost:3000/login'

class login extends Component{

    pegarValoresForm(e){
        const form = {
          email: e.target.email.value,
          senha: e.target.senha.value
        }
        return form
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        const dadosForm = this.pegarValoresForm(e)
        const urlLogin = `${serverLoginURL}/${dadosForm.email}/${dadosForm.senha}`
        axios.get(urlLogin)
        .then((success) => {
            alert('logado!')
            console.log(success)
        },
        (err) => {
            alert('Ocorreu um erro ao tentar fazer login')
            console.log(err)
        })
    }

    render(){
        return(
            <div className="login1">
                <Form className="login" name="login" onSubmit={this.onSubmit}>
                    <h1 style={{fontWeigth: 'bold', fontSize: '55px', marginBottom: "45px"}}>PowerFit</h1>
                    <Input className="loginInput" label="loginLabelInput" type="text" name="email" name_campo="Email"/>
                    <Input className="loginInput" label="loginLabelInput" type="password" name="senha" name_campo="Senha"/>
                    <Botao name="login" cor="dark" formatacaoEspecial="botao-login"/>
                    
                    <div style={{fontSize: "12px", textAlign: "right", marginRight: "45px", textDecoration: "none", color: "white"}}>
                        <br />
                        <Link to="/cadastro">Se ainda não se cadastrou? Cadastre-se!</Link>
                    </div>
                </Form>
            </div>
        )
    }
}

export default login