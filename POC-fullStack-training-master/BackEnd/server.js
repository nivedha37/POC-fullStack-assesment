const express=require('express');
const connectDB= require('./config/db')
const app=express();

//connect database
connectDB();

app.use(express.json({extended:false}))
app.get('/',(req,res)=>res.send('API running'));
app.use('/api/authenticateUser',require('./routes/api/User'));
app.use('/api/',require('./routes/api/Team'));
const PORT= process.env.PORT|| 5000;

app.listen(PORT, ()=> console.log(`server started at port ${ PORT }`))
