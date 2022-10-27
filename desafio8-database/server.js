//server
const express = require('express')
const PORT = process.env.PORT || 8081
//templates
const hbs = require('express-handlebars')
//socket
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
//database
const { mysqlConn, sqlite3Conn } = require('./persistence/config/connection.js')
const { createTableProducts, createTableMessages } = require('./persistence/config/create')
const tables = { mysql: 'products', sqlite3: 'messages' }
const mysqlKnex = require('knex')(mysqlConn);
const sqlite3Knex = require('knex')(sqlite3Conn);

//config server
const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

//config templates
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

//config database
const DataBase = require("./persistence/Database")
const mysqlDB = new DataBase(mysqlKnex, tables.mysql)
const sqlite3DB = new DataBase(sqlite3Knex, tables.sqlite3)


/*-------------------------------------*/
/* create tables and insert test data  */
/*-------------------------------------*/
const createFromScratch = async () => {
    await createTableProducts(mysqlKnex, tables.mysql)
    await createTableMessages(sqlite3Knex, tables.sqlite3)
    await sqlite3DB.save({ email: 'people1@gmail.com', msg: 'Bienvenido al chat!', date: new Date(Date.now()).toLocaleString() })
    await mysqlDB.save({ title: 'Placa de video Nvidia Evga KO Gaming GeForce RTX 20 Series RTX 2060 06G-P4-2068-KR 6GB', price: '111.248', thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_2X_989904-MLA43401240797_092020-F.webp' })
}
createFromScratch();


//config HBS
app.engine('hbs', hbs.engine({
    extname: '.hbs',
    partialsDir: __dirname + '/views/partials',
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'default.hbs'
}))
app.set('views', './views')
app.set('view engine', 'hbs')

//config routes
app.get('/', (req, res) => {
    res.render('index.hbs')
})

//listener
httpServer.listen(PORT, () => console.log(`Server UP on ${PORT}`));

//sockets operations
io.on('connection', async socket => {
    const listProds = await mysqlDB.getAll()
    socket.emit('updateCatalog', listProds)
    const listMsgs = await sqlite3DB.getAll()
    socket.emit('updateMessages', listMsgs)

    socket.on('sendMessage', async data => {
        const { email, msg } = data;
        const msgElement = { email: email, msg: msg, date: new Date(Date.now()).toLocaleString() }
        await sqlite3DB.save(msgElement)
        const listMsgs = await sqlite3DB.getAll()
        io.sockets.emit('updateMessages', listMsgs)
    })

    socket.on('addProduct', async data => {
        await mysqlDB.save(data)
        const listProds = await mysqlDB.getAll()
        io.sockets.emit('updateCatalog', listProds)
    })

    socket.on('deleteProduct', async data => {
        const { id } = data;
        await mysqlDB.deleteById(id)
        const listProds = await mysqlDB.getAll()
        io.sockets.emit('updateCatalog', listProds)
    })

})