const express = require('express');
const app = express();
const bodyparser=require('body-parser');
app.use(bodyparser.json());
// Your route definition
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/bietdatabase',{
    useNewUrlParser: true,      
  useUnifiedTopology: true, 
}).then(()=>console.log("database connected successfully"))
.catch(()=>console.log("error while connecting with database"))

app.post('/api/car',(req,resp)=>{

    console.log(req.body);
    resp.send("we are getting some response from postman");
})
app.get('/', (req, res) => {
    res.send("okay you are starting your backend journey");
})
// Start the server
const PORT = 3000; // Or any other port number you prefer
app.listen(3000, () => {
    console.log(`Server is running on port `);
});
