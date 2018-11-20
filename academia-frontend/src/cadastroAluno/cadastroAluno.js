import React, {Component} from 'react'
import imgAcademia from '../imagens/academia.jpg'
import Header from '../header/header'
import Container from '../container/container'
import Rodape from '../rodape/rodape'
import Menu from '../menu/menu'
import Formulario from '../formulario/formulario'
import Input from '../formulario/input'
import Janela from '../janela/janela'
import Botao from '../botao/botao'
import axios from 'axios'
import './cadastroAluno.css'

const serverCadastroAlunoURL = 'http://localhost:3000/cadastro'

class cadastroAluno extends Component {

    camposIguais = (campo1, campo2) => {
      if(campo1 == campo2){
        return true
      }else{
        return false
      }
    }

    valoresForm(e){
      const form = {
        nome: e.target.nome.value,
        email: e.target.email.value,
        senha: e.target.senha.value
      }
      return form
    }

    onSubmit = (e) => {
      e.preventDefault();
      const senha = document.cadastro.senha.value
      const confirmSenha = document.cadastro.confirmSenha.value
      if(this.camposIguais(senha, confirmSenha)){
        const dadosForm = this.valoresForm(e)

        axios.post(serverCadastroAlunoURL, dadosForm)
          .then((success) => {
            alert('cadastro realizado com sucesso!')
          },
          (err) => {
            alert('Ocorreu um erro ao cadastrar: ' + err)
            
          })

      }else{
        alert('Senhas diferentes')
      }
    }


    render() {
      return (
        <React.Fragment>
          <Header />
          <Container>
            <Janela title="cadastro">
              <Formulario name="cadastro" onSubmit={this.onSubmit}>
                <Input onChange name_campo="Nome completo" name="nome" type="text" placeholder="digite seu nome completo..." required={true} />
                <Input name_campo="Email" name="email" type="email" placeholder="example@example..." required={true} />
                <Input name_campo="Senha" name="senha" type="password" placeholder="digite a senha" required={true} />
                <Input name_campo="Confirme a senha" name="confirmSenha" type="password" placeholder="confirme a senha" required={true} />
                <Botao name="Cancelar" cor="default"/>
                <Botao name="Cadastrar" cor="dark" />
              </Formulario>
              <div id="img-cadastro">
                <img src={imgAcademia} height="395" width="350"/>
              </div>
            </Janela>
          </Container>
          <Menu />
          <Rodape />
        </React.Fragment>
      );
    }
  }

export default cadastroAluno