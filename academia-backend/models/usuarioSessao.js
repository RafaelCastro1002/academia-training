import mongoose, {Schema} from 'mongoose'

const schema = new Schema({
    usuarioId: {type: String, default: ''},
    timeTamp: {type: Date, default: Date.now()},
    isDeleted: {type: Boolean, default: false}
})

const UsuarioSessao = mongoose.model('UserSession', schema)

export default UsuarioSessao