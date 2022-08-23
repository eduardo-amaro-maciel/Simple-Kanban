const editPositionCard = (event, column) => {

    const id = event.item.getAttribute('data-id') 
    let itemColumn = event.item;
    itemColumn.setAttribute('data-column', column)
    dataBase.editColumnCard(column, id)
}


new Sortable(document.getElementById('realizar'), {
    group: 'shared', // set both lists to same group
    animation: 150,
    onAdd: (event) => {
        editPositionCard(event, 1)
    },
});


new Sortable(document.getElementById('em-desenvolvimento'), {
    group: 'shared',
    animation: 150,
    onAdd:  (event) => {
        editPositionCard(event, 2)
    },
});


new Sortable(document.getElementById('concluido'), {
    group: 'shared',
    animation: 150,
	onAdd: (event) => {
        editPositionCard(event, 3)
    },
});