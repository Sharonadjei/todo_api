const { request, response } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const todoController = require('./controllers/todoController');
app.get('/',(request,response)=>{
    response.send('Hello this is a get method');
}
);
app.post('/',(request,response)=>{
    response.send("Hello this is a post method")
}
);
app.get('/todos',(request,response)=>{
    response.send([{
        'title':'plan a trip to capecoast',
        'description':'i will go nand buy food staff',
        'time':'today',
        'isCompleted':true
    }]);
});
    app.get('/users',(request,response)=>{
        response.send([
            {'username':'sammy',
        'password':'passWord',
            
        }])

    
}
);


app.listen(4050,() =>{
    console.log("my server is up and running on port 3000");
    mongoose.connect('mongodb+srv://Akosua:36360@cluster0.sgunl.mongodb.net/todo_db?retryWrites=true&w=majority')
    .then(function(){
        console.log("DataBase is connected");
    })
    .catch(function(error){
        console.log(`DataBase not connected ${error}`);
    })
});


