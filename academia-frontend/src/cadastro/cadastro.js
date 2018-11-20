import React, {Component} from 'react'
import Header from '../header/header'
import Formulario from '../formulario/formulario'
import Input from '../formulario/input'
import Botao from '../botao/botao'
import axios from 'axios'
import './cadastro.css'

const serverCadastroURL = 'http://localhost:3000/cadastro'

class cadastro extends Component {

  constructor(props){
    super(props)
    this.state = {
      isLoading: false,
      messageLoading: '', 
      posicao: 0,
      crescente: true
    }
    this.isLoading = this.isLoading.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  isLoading(isLoading){
    const cena = ["Loading.", "Loading..", "Loading..."]
    console.log('to aqui!!!')
    setTimeout(function() {
      var posicao = this.state.posicao
      this.setState({messageLoading: cena[posicao]})
      if(this.state.posicao == 2){
        this.setState({crescente: false})
      }else{
        if(this.state.posicao == 0){
          this.setState({crescente: true})
        }
      }
      if(this.state.crescente){
        this.setState({posicao: this.state.posicao + 1})
      }else{
        this.setState({posicao: this.state.posicao - 1})
      }
      console.log(this.state.posicao)
    }.bind(this), 1)
    
    if(isLoading){
      return (<div style={{color: "white", marginTop: "30px", position: "absolute", top: "-39px", left: "-400px"}}>{this.state.messageLoading}</div>)
    }
    return <div></div>  
    
  }

  camposIguais = (campo1, campo2) => {
    if(campo1 == campo2){
      return true
    }else{
      return false
    }
  }

  pegarValoresForm(e){
    const form = {
      nome: e.target.nome.value,
      email: e.target.email.value,
      senha: e.target.senha.value
    }
    return form
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({isLoading: true})
    this.isLoading()
    const senha = document.cadastro.senha.value
    const confirmSenha = document.cadastro.confirmSenha.value
    if(this.camposIguais(senha, confirmSenha)){
      const dadosForm = this.pegarValoresForm(e)

      axios.post(serverCadastroURL, dadosForm)
        .then((resposta) => {
          console.log(resposta.data.erro)
          if(resposta.data.sucesso){
            alert(resposta.data.message)
            window.location.href = 'http://localhost:3001/login'
          }else{
            alert(resposta.data.erro)
          }
          
        },
        (err) => {
          alert('Ocorreu um erro ao cadastrar: ' + err)
          
        })

    }else{
      alert('Senhas diferentes')
    }
    this.setState({isLoading: false})
  }

  render () {
    return (
      <div className='cadastro'>
        <Header className="headerCadastro"/>
        <Formulario className="cadastroUsuario" name="cadastro" onSubmit={this.onSubmit}>
          {this.isLoading(this.state.isLoading)}
          <div className="logoCadastro">Cadastre-se</div>
          <Input className="usuarioCadastroInput" name_campo="Nome completo" name="nome" type="text" required={true} />
          <Input className="usuarioCadastroInput" name_campo="Email" name="email" type="email" required={true} />
          <Input className="usuarioCadastroInput" name_campo="Senha" name="senha" type="password" required={true} />
          <Input className="usuarioCadastroInput" name_campo="Confirme a senha" name="confirmSenha" type="password" required={true} />
          <Botao formatacaoEspecial="cadastrar" name="Cadastrar" cor="dark" loading={this.isLoading()}/>
        </Formulario>

      </div> 
    )
  }
}
export default cadastro