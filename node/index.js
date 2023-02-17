const express = require('express')
const app = express()

const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const row = html => `<tr>\n${html}</tr>\n`,
      heading = object => row(Object.keys(object).reduce((html, heading) => (html + `<th>${heading}</th>`), '')),
      datarow = object => row(Object.values(object).reduce((html, value) => (html + `<td>${value}</td>`), ''));
                               
function htmlTable(dataList) {
  return `<table border='1'>
            ${heading(dataList[0])}
            ${dataList.reduce((html, object) => (html + datarow(object)), '')}
          </table>`
}
const mysql = require('mysql')
let connection = mysql.createConnection(config)
const random_name = require('node-random-name');

let sql = `insert into people(name) values('`+ random_name() +`')`
connection.query(sql)


app.get('/', (req,res) => {
    sql = "select * from people"
    connection.query(sql, function (error, results) {
        if (error) {
            return console.error(error.message);
        }
        res.send("<h1>Full cycle Rocks!</h1>" + htmlTable(results))
    })
    
})

app.listen(port, () => {
    console.log("Rodando na porta " + port)
})