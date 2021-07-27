document.addEventListener('keyup',(evento)=>{
        recebeLetra(evento.code.toLowerCase())
})

function recebeLetra(letra){
    let musica = document.querySelector(`#s_${letra}`)
    let caixa = document.querySelector(`div[data-key="${letra}"]`)

    if(musica){
        musica.play()
        musica.currentTime = 0
    }

    if(caixa){
        caixa.classList.add('active')
    }

    setTimeout(() => {
        caixa.classList.remove('active')
    }, 300);
}


document.querySelector('.composer button').addEventListener('click', ()=> {
    let input = document.querySelector('#input').value
    if(input !== ''){
        let array = input.split('')
        composicao(array)
    }
  
  })
  
  function composicao(letras) {
   
    let seg = 0

    for(let valor of letras){
       
       setTimeout(() => {
        recebeLetra(`key${valor}`)
       }, seg);
        seg += 250
    }

  }