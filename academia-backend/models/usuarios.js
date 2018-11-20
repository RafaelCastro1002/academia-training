import mongoose, {Schema} from 'mongoose'
import bcrypt from 'bcrypt'

var usuarioSchema = new Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true},
    senha: {type: String, required: true}
})

usuarioSchema.methods.gerarHash = function(senha) {
  return (bcrypt.hashSync(senha, bcrypt.genSaltSync(8), null))
}

usuarioSchema.methods.validarSenha = function(senha) {
  return (bcrypt.compareSync(senha, this.senha))
}

var usuario = mongoose.model('Usuario', usuarioSchema)

export default usuario