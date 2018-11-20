import 'express'
import UsuarioModel from '../models/usuarios'
import UsuarioSessao from '../models/usuarioSessao'

class usuarioController{

    cadastro(req, res){
        var {email} = req.body
        var {senha} = req.body
        var {nome} = req.body
        if(!email){
            console.log('erro 4')
            return res.send('email não pode estar em branco!')
        }else{
            if(!senha){
                console.log('erro 3')
                return res.send('senha não pode estar em branco!')
            }
        }

        email = email.trim()

        //salvar usuário no banco de dados
        UsuarioModel.find({email: email}, (err, userCadastrado) => {
                if(err){
                    console.log('erro2')
                    return res.send({sucesso: false, erro: "Erro: falha no servidor!"})
                }else{
                    if(userCadastrado.length > 0){
                        console.log('erro 1')
                        return res.send({sucesso: false, erro: 'Erro: Email já cadastrado!'})
                    }
                }
                console.log(userCadastrado)
                var novoUsuario = new UsuarioModel()
                novoUsuario.email = email
                novoUsuario.nome = nome
                console.log()
                novoUsuario.senha = novoUsuario.gerarHash(senha)
                novoUsuario.save((erro, sucesso) => {
                    if(erro){
                        return res.send({sucesso: false, erro: "Erro: falha no servidor"})
                    }
                
                    console.log(sucesso)
                    console.log('sucesso')
                    res.send({sucesso: true, message: 'Usuário salvo com sucesso!'})
                })
            })
            
    }

    login(req, res){

        try{
            var email = req.params.email
            var senha = req.params.senha

            if(!email){
                return res.send({
                    sucesso: false,
                    erro: 'Erro: Email não inserido!'
                })
            }
            if(!senha){
                return res.send({
                    sucesso: false,
                    erro: 'Erro: Senha não inserida!'
                })
            }

            email = email.toLowerCase()
            email = email.trim()

            UsuarioModel.find({email: email}, (res, usuarios) => {
                if(err){
                    return res.send({
                        sucesso: false,
                        erro: 'Erro: Ocorreu um problema interno no servidor! Tente novamente mais tarde!'
                    })
                }
                if(usuarios.length != 1){
                    return res.send({
                        sucesso: false,
                        erro: 'Erro: Informe um login valido!'
                    })
                }
                const usuario = usuarios[0]

                if(!usuario.validarSenha(senha)){
                    return res.send({
                        sucesso: false,
                        erro: 'Erro: Email ou senha incorretos!'
                    })
                }

                const usuarioSessao = new UsuarioSessao()
                usuarioSessao.usuarioId = usuario._id
                usuarioSessao.save((erro, sessao) => {
                    if(erro){
                        return res.send({
                            sucesso: false,
                            erro: 'Erro: Ocorreu um problema interno no servidor! Tente novamente mais tarde!'
                        })
                    }

                    res.send({
                        sucesso: true,
                        mensagem: 'Logado com sucesso!',
                        token: sessao._id
                    })
                })
            })
        }catch(e){
            console.log(e)
            res.send(e)
        }
    }
    logout(req, res, next){
        
        if (req.session) {
            // delete session object
            req.session.destroy(function(err) {
                if(err) {
                    return next(err);
                } else {
                    return res.redirect('/');
                }
            });
        }
          
    }
}

export default usuarioController