btnNewCard = document.getElementById('modal-salvar-card')

btnNewCard.addEventListener('click', (event) => {

    const title = document.getElementById('input-modal-titulo-tarefa')
    const description = document.getElementById('input-modal-descricao-tarefa')
    const day = document.getElementById('input-modal-data-tarefa')
    const color = document.getElementById('input-modal-cor-tarefa')

    if (validar.validateInputsNewCard()) {

        UIkit.modal('#modal-new-card').hide();

        const objNewCard = {
            title: title.value,
            description: description.value,
            day: day.value,
            color: color.value,
            column: 1,
        }
    
        title.value = ''
        description.value = ''
        day.value = ''
        color.value = ''
    
        dataBase.newCard(objNewCard)
        renderCards(objNewCard)
    }
})