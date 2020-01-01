const express = require('express');
const morgan = require('morgan');
const app = express();

//Settings
app.set('port', process.env.PORT || 3003)


//Middlewares
app.use(morgan('dev'));
app.use(express.json());


//Routes

//Server
app.listen(app.get('port'), ()=>{
    console.log('Server on port ' + app.get('port'));
});