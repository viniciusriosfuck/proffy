// require("express")()
// .get("/", (req, res) => { //() anonym function,  => arrow function
//     return res.send("Hi from NLW")
// })
// .get("/study", (req, res) => {
//     return res.send("Page study 2")
// })
// console.log(__dirname)


// DATA
const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "9999999",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [
            0  // Domingo-2a-...-Sábado [0-7]
        ],
        time_from: [720], // Segundos
        time_to: [1220]
    },
    {
        name: "Daniele Evangelista",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "9999999",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [
            1  // Domingo-2a-...-Sábado [0-7]
        ],
        time_from: [720], // Segundos
        time_to: [1220]
    },
]  // [] array;  {} object

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]


// const title = "Hi friend"


// FUNCTIONS

function getSubjects(subjectNumber) {
    const position = + subjectNumber - 1
    return subjects[position]
}

function getWeekdays(weekdaysNumber) {
    const position = + weekdaysNumber - 1
    return weekdays[position]
}



function pageLanding(req, res) {
    return res.render("index.html")
    // return res.sendFile(__dirname + "/views/index.html")
}

function pageStudy(req, res) {
    // return res.render("study.html", {proffys, title: "Hi from Nunjucks"})
    // return res.render("study.html", {proffys, title})
    // return res.render("study.html", {diego: proffys[0]})
    // console.log(req.query)
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res) {
    const data = req.query
    // console.log(data)

    // {}  ->  []
    const isnotEmpty = Object.keys(data).length > 0


    // add data to proffy
    // if (data) {  // is empty, but exists
    if (isnotEmpty) {
        // console.log("inside if")

        data.subject = getSubjects(data.subject)
        data.weekday = getWeekdays(data.weekday)



        proffys.push(data)
        
        return res.redirect("/study")
    }
    // else  (if data is Empty)
    return res.render("give-classes.html", {subjects, weekdays})
}


// SERVER
const express = require("express")
const server = express()

// config nunjucks (template engine)
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true,
})

// config static files (css, scripts, images)
server.use(express.static("public"))
// app path
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
// start server
.listen(5500)




