/**
  o node entende o padrao de modulos do commons js (module.exports/require), 
  para ele entender o ecmascript(export default/import), o webpack faz essa transpilacao de codigo
  **/ 

import Pessoa from './pessoa'
//importando para o webpack config poder enchergar outro codigo
import './modulos/moduloA'
import './assets/index.js'

const atendente = new Pessoa
console.log(atendente.cumprimentar())