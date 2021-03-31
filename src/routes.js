const express = require('express'); //express é uma biblioteca para criar servidor
const routes = express.Router(); //parte do express para criar rotas/caminhos

//variável criada para encurtar a aplicação
const views = __dirname + "/views/"

const profile = {
    name: "Rodrigo",
    avatar: 'https://github.com/lorandi.png',
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4
}

const jobs = [];

//req, res
routes.get("/", (req, res) => res.render(views + "index"))
routes.get("/job", (req, res) => res.render(views +"job"))
routes.post("/job", (req, res) => {
    //req.body = { name: 'Rodrigo Lorandi7', 'daily-hours': '7', 'total-hours': '7' }
    
    const job = req.body
    job.createdAt = Date.now()  //atribuindo nova data

    jobs.push(req.body)
    return res.redirect("./")
})
routes.get("/job/edit", (req, res) => res.render(views +"job-edit"))
routes.get("/profile", (req, res) => res.render(views +"profile", { profile }))

module.exports = routes;