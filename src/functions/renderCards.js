const queryColumn = (kanban, card) => {
    
    let element = document.getElementById(kanban)

    element.appendChild(card)
}

const selectKanbamColumn = (card, column) => {

    
    if (column === 1) {
        queryColumn('realizar', card)
    } else if (column === 2) {
        queryColumn('em-desenvolvimento', card)
    } else {
        queryColumn('concluido', card)
    }
}

const renderCards = ({ id, title, description, day, color, column }) => {

    const card = document.createElement('div')

    card.setAttribute('class', 'card')
    card.setAttribute('data-column', column)
    card.setAttribute('data-id', id)

    card.innerHTML = `
        <div class="card-title">${title}</div>
        <div class="card-aux">
            <div class="aux-data">${day}</div>
            <div>
                <a href="#"><span uk-icon="icon: more"></span></a>
                <div uk-dropdown="mode: click">
                    <ul class="uk-nav uk-dropdown-nav">
                        <li>
                            <a class="btn-view" href="#"
                            onclick="cardOptions.onViewCard('${title}', '${description}', '${day}', '${color}')">
                            
                            <i class="fa-solid fa-eye"></i>
                                Ver
                            </a>
                        </li>
                        <li>
                            <a class="btn-edit" href="#"
                            onclick="cardOptions.onEditCard('${title}', '${description}', '${day}', '${color}', '${column}', '${id}')">
                            
                            <i class="fa-solid fa-pen-to-square"></i> 
                                Editar
                            </a>
                        </li>
                        <li>
                            <a class="btn-delete" href="#" 
                            onclick="cardOptions.onDeleteCard('${id}')">
                            
                            <i class="fa-solid fa-trash-can"></i> 
                                Excluir
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `

    card.style.borderLeft = `7px solid ${color}`

    selectKanbamColumn(card, column)
}
