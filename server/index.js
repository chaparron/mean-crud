const express = require('express');
const app = express();

//Settings
app.set('port', process.env.PORT || 3003)


//Middlewares

//Routes

//Server
app.listen(app.get('port'), ()=>{
    console.log('Server on port ' + app.get('port'));
});