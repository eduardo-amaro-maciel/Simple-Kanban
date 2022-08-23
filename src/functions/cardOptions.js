const cardOptions = {
    
    onViewCard(title, description, day, color) {

        document.getElementById('modal-titulo-tarefa').innerText = title
        document.getElementById('modal-descricao-tarefa').innerText = description
        document.getElementById('modal-cor-tarefa').style.backgroundColor = color
        document.getElementById('modal-data-tarefa').innerText = day
        
        UIkit.modal('#modal-center').show();
    },
    

    onDeleteCard(id) {

        alert.alertDelet().then(response => {

            if (response) {

                let elemento = document.querySelector(`[data-id="${id}"]`)
                elemento.parentNode.removeChild(elemento);
                dataBase.deleteCard(id)
            }
        })
    },


    onEditCard(title, description, day, color, column, id) {

        console.log(column)

        document.getElementById('edit-modal-titulo-tarefa').value = title
        document.getElementById('edit-modal-descricao-tarefa').value = description
        document.getElementById('edit-modal-cor-tarefa').value = color
        document.getElementById('edit-modal-data-tarefa').value = day

        UIkit.modal('#modal-edit-card').show()

        btnEditCard = document.getElementById('edit-modal-salvar')

        btnEditCard.addEventListener('click', (event) => {

            const title = document.getElementById('edit-modal-titulo-tarefa')
            const description = document.getElementById('edit-modal-descricao-tarefa')
            const day = document.getElementById('edit-modal-data-tarefa')
            const color = document.getElementById('edit-modal-cor-tarefa')

            if (validar.validateInputsEditCard()) {

                UIkit.modal('#modal-edit-card').hide();

                let elemento = document.querySelector(`[data-id="${id}"]`)
                elemento.parentNode.removeChild(elemento);

                const objEditCard = {
                    title: title.value,
                    description: description.value,
                    day: day.value,
                    color: color.value,
                    column: column,
                    id: id
                }
            
                title.value = ''
                description.value = ''
                day.value = ''
                color.value = ''
            
                dataBase.editCard(objEditCard)
                renderCards(objEditCard)
            }
        })
    }
}