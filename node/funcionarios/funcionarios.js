url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const isChinaEMulher = x => x.pais == 'China' && x.genero == 'F'
const menorSalario = (funcionario, funcAtual) => {
    return funcionario.salario < funcAtual.salario ? funcionario : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios.filter(isChinaEMulher).reduce(menorSalario))
})