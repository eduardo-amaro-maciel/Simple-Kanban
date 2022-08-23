let _db = openDatabase('dbTips', '1.0', 'Database Kanban', 2 * 1024 * 1024)

const dataBase = {

    creatTable() {

        _db.transaction(tx => {
            tx.executeSql(`
                CREATE TABLE IF NOT EXISTS card (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    title TEXT,
                    description TEXT,
                    day TEXT,
                    color TEXT,
                    column INTEGER
                )`
            )
        })
    },
    

    deleteTable() {

        _db.transaction(tx => {
            tx.executeSql(`
                DROP TABLE card`
            )
        })
    },


    newCard({ title, description, day, color, column }) {

        _db.transaction(tx => {
            tx.executeSql(`
                INSERT INTO card 
                (title, description, day, color, column) 
                VALUES(?, ?, ?, ?, ?)`, 
                [title, description, day, color, column]
            )
        })
    },


    editCard({ title, description, day, color, column, id }) {

        _db.transaction(tx => {
            tx.executeSql(`
                UPDATE card 
                SET title=?, description=?, day=?, color=?, column=?
                WHERE id=?`, 
                [title, description, day, color, column, id]
            )
        })
    },


    deleteCard(id) {

        _db.transaction(tx => {
            tx.executeSql(`
                DELETE FROM card 
                WHERE id=?`, 
                [id]
            )
        })
    },


    editColumnCard(column, id) {

        _db.transaction(tx => {
            tx.executeSql(`
                UPDATE card 
                SET column=?
                WHERE id=?`, 
                [column, id]
            )
        })
    },
    

    selectCards() {

        document.getElementById('realizar').innerHTML = ''
        document.getElementById('em-desenvolvimento').innerHTML = ''
        document.getElementById('concluido').innerHTML = ''
        
        _db.transaction(tx => {
            tx.executeSql(`SELECT * FROM card`, [], function(_, result) {
               
                Array.from(result.rows).map(element => {
                    renderCards(element)
                })
            })
        })
    }
}