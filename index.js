const express = require('express')
const app = express()
const port = process.env.PORT || 3000

var student={}
student.name="Madishetty Sai Krishna"
student.college="Vallurupalli Nagesh Rao Vignan Jyothi College"
student.id="9849236443"

   //this line tells express to serve js or css files from frontend folder

    
app.use(express.static('frontend'))
app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/html/home.html'))
app.get('/login', (req, res) => res.send('Login'))
app.get('/register', (req, res) => res.send('Register'))
app.get('/data', (req,res) => res.json(student))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))