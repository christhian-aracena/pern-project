const express = require('express');

const morgan = require('morgan');

const cors = require('cors');

const taskRoutes = require('./routes/task.routes')

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(taskRoutes);
app.use((err, req, res, next)=>{
    return res.json({
        message: err.message
    })
});

app.use(cors());

app.listen(5000);

console.log('server running on port 5000');