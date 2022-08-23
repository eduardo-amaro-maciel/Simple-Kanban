const validar = {

    validateInputsNewCard() {

        const title = document.getElementById('input-modal-titulo-tarefa')
        const description = document.getElementById('input-modal-descricao-tarefa')
        const day = document.getElementById('input-modal-data-tarefa')
        const color = document.getElementById('input-modal-cor-tarefa')

        let inputOk = true
    
        if (title.value === '') { 
            exibirErroInput('erro-titulo') 
            inputOk = false 
        }
        if (description.value === '') { 
            exibirErroInput('erro-descricao')   
            inputOk = false 
        }
        if (day.value === '') { 
            exibirErroInput('erro-data')                 
            inputOk = false 
        }
        if (color.value === '') { 
            exibirErroInput('erro-cor');                
            inputOk = false 
        }
    
        return inputOk
    },

    
    validateInputsEditCard() {

        const title = document.getElementById('edit-modal-titulo-tarefa')
        const description = document.getElementById('edit-modal-descricao-tarefa')
        const day = document.getElementById('edit-modal-data-tarefa')
        const color = document.getElementById('edit-modal-cor-tarefa')

        let inputOk = true
    
        if (title.value === '') { 
            exibirErroInput('erro-edit-titulo') 
            inputOk = false 
        }
        if (description.value === '') { 
            exibirErroInput('erro-edit-descricao')   
            inputOk = false 
        }
        if (day.value === '') { 
            exibirErroInput('erro-edit-data')                 
            inputOk = false 
        }
        if (color.value === '') { 
            exibirErroInput('erro-edit-cor');                
            inputOk = false 
        }
    
        return inputOk
    }
}