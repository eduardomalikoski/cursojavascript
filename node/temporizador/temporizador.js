const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/3 * 14 * * 4', function () {
    console.log('exec tarefa1', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('cancelando tarefa1')
}, 20000)
// setImmediate
// setInterval
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.h = 14
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('exec tarefa2', new Date().getSeconds())
})