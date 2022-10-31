const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const http = require('http').createServer(app)
// require("./model")
const port = process.env.PORT || 3000;

const staticpath = path.join(__dirname, "../public")
const templatepath = path.join(__dirname, "../templates/views")
const partialspath = path.join(__dirname, "../templates/partials")


app.set('view engine', 'hbs');
app.use(express.static(staticpath))
app.set("views", templatepath)
hbs.registerPartials(partialspath)


app.get("/", (req, res) => {
   res.render('index')
})
app.get("/chat", (req, res) => {
res.render('chat')
})

//socket
const io = require("socket.io")(http)

io.on('connection', (socket) => {
    console.log('connected.....')

    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })

})

http.listen(port, () => {
    console.log(`listening port no.${port}`)
})