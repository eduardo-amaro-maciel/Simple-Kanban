const exibirErroInput = (erroDisplay) => {

    document.getElementById(erroDisplay).style.display = 'block'
    
    setTimeout(() => {
       document.getElementById(erroDisplay).style.display = 'none'
    }, 10000)
}