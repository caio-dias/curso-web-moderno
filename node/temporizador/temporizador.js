/**
 * Tarefas temporizadas
 */

const schedule = require('node-schedule')

//executando uma tarefa de 5 em 5 seg, qualquer minuto das 17 horas, em qualquer dia do mes, sendo uma sexta feira
const tarefa1 = schedule.scheduleJob('*/5 * 17 * * 5', () => {
  //a callback que o metodo recebe, executa qualquer tarefa que o usuario quiser
  console.log('Executando Tarefa 1!', new Date().getSeconds())
})

//cancelando a tarefa1
setTimeout(() => {
  tarefa1.cancel()
  console.log('Cancelando a tarefa1!')
}, 20000);

//regra de recorrencia
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] //executando de segunda a sexta feira as 17 horas, em todos segundos 30
regra.hour = 17
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra,  () => {
  console.log('Executando tarefa 2!', new Date().getSeconds())
})