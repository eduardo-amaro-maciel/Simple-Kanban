alert = {

    alertDelet () {

        return new Promise((resolve, reject) => {
            
            Swal.fire({
                title: 'Você tem certeza?',
                text: "Essa mudança pode ser permanente!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'DELETAR',
                cancelButtonText: 'CANCELAR',
            }).then(result => {
    
                if (result.isConfirmed) {
                    Swal.fire(
                        'Deletado!',
                        'A tarefa foi deletada com sucesso!',
                        'success'
                    )
    
                    resolve(true)
                }
    
                resolve(false)
            })
        })
    },
}