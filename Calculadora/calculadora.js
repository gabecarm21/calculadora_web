function calculo (n1, operator, n2) {}
  
let calculadora = (document.querySelector('.calculadora'))
let tela = document.querySelector('.calculadora_tela')
let teclas = calculadora.querySelector('.calculadora_teclas')
let previousKeyType = '0'


teclas.addEventListener('click', e => {
 if (e.target.matches('button')) {
    let tecla = e.target
    let acao = tecla.dataset.action
    let conteudoTecla = tecla.textContent
    let numeroNaTela = tela.textContent
    let teclaAnterior = calculadora.dataset.previousKeyType
    let botaoLimpar = calculadora.querySelector ('[data-action = limpar]')
   
    
    Array.from(tecla.parentNode.children)
    .forEach(k => k.classList.remove('is-depressed'))

    if (!acao) {
        if (numeroNaTela === '0' || teclaAnterior === 'tecla_operacao') {
            tela.textContent = conteudoTecla
            botaoLimpar.textContent = "CE"
            calculadora.dataset.previousKeyType = '0'
          } else {
            tela.textContent = numeroNaTela + conteudoTecla
          }
      }
    
    if (
        acao === 'somar' ||
        acao === 'subtrair' ||
        acao === 'multiplicar' ||
        acao === 'dividir'
      ) {
        tecla.classList.add('is-depressed')
        calculadora.dataset.previousKeyType = 'tecla_operacao'
        calculadora.dataset.firstValue = numeroNaTela
        calculadora.dataset.operator = acao
    }

    if (acao === 'decimal') {
        tela.textContent = numeroNaTela + '.'
      }
      
    if (acao === 'limpar') {
      if (tecla.textContent === 'AC'){
        calculadora.dataset.previousKeyType = '0'
        calculadora.dataset.firstValue = '0'
        calculadora.dataset.operator = ''
        calculadora.dataset.segundoValor ='0'
        tela.textContent = '0'
      } else {
        tecla.textContent = 'AC'
      }
      tela.textContent = 0
      calculadora.dataset.previousKeyType = 'limpar'
    }
    if (acao !== 'limpar' && acao !== 'tecla_igual'){
      botaoLimpar.textContent = 'CE'
    }
      
    
      if (acao === 'tecla_igual') {
        let primeiroValor = calculadora.dataset.firstValue
        let operador = calculadora.dataset.operator
        let segundoValor = numeroNaTela
        botaoLimpar.textContent = 'AC'
        let resultado = calculo(primeiroValor,operador,segundoValor)
        calculadora.dataset.previousKeyType = 'tecla_operacao'
        tela.textContent = resultado

        }
        

        
      }
 
})

function calculo (n1, operator, n2) {
  let result = ''
    if (operator === 'somar') {
      result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === 'subtrair') {
      result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === 'multiplicar') {
      result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === 'dividir') {
      result = parseFloat(n1) / parseFloat(n2)
    }
    
    return result
  }