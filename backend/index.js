const connectToMongo=require('./db')
const express=require('express')
const cors=require('cors')
connectToMongo()

const app=express();
const port =5000
app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>{
    console.log(req.cookies)
})

app.use('/auth',require('./routes/user'))

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });