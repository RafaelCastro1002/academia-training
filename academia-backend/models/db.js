import mongoose from 'mongoose';
import './usuarios'
import './usuarioSessao'

const dbURI = 'mongodb://localhost/academia'

mongoose.connect(dbURI, { useNewUrlParser: true });

mongoose.connection.on('connected', () => { console.log('connected on MongoDB to ' + dbURI) })
mongoose.connection.on('error', (error) => { console.log('connected error: ' + error) })
mongoose.connection.on('disconnected', () => { console.log('disconnected on MongoDB')})