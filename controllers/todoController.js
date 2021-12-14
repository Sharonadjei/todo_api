const todoModel = require('../models/todoModels')
function addTodo(request,response){
   

}
function getAllTodo(request,response){
    response.send("hello this getAllTodo controller")
}
function updatebyid(request,response){
    response.send("hello this updatebyid controller")
}
function deletebyid(request,response){
    response.send("hello this deletebyid controller")
}
module.exports = {
    addTodo,
    getAllTodo,
    updatebyid,
    deletebyid
}