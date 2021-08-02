const express = require("express");

const app = express()  ;

const mongoose = require ("mongoose");
mongoose.connect("mongodb+srv://user:user@workshop-f3.9psrm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
{useNewUrlParser: true , useUnifiedTopology: true},
(err)=>{

if (err) throw err ; 
 else

 console.log("DB is connected");

}
);

app.use(express.json()); //middleware bodyParser => permet de lire JSON dans notre app 
app.use("/contacts", require("./routes/contactRoutes")); 

app.listen(5000, (err)=>{

if (err) throw err ;
else console.log("Server is running on port 5000");


}); 