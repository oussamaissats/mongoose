const express = require('express');
const router = express.Router();
const Contact = require("../models/contactSchema"); 


/*Crud*/


/*post a user*/ 
router.post('/newcontact', (req,res) => {

   let newcontact = new Contact(req.body)

   newcontact.save((err,data)=>{

    if (err) throw err 
    else res.send('Contact was added')
    /*else res.json({msg:"contact added"});*/


   }) 

})
/*get a user by id */
router.get("/:id",(req,res)=>{
  // const contactId = req.params.id
Contact.find({_id : req.params.id},(err,data)=>{
if (err) throw err;
else res.send(data);

});
});

/* Delete a user by id */
router.delete("/deletecontact/:id", (req, res)=> {
Contact.findByIdAndDelete({_id:req.params.id},( err,msg)=>{

if (err) throw  err ; 
else 
res.json( {msg:"Contact was deleted"});

});
});




/*update a user by id */ 
router.put("/updatecontact/:id", (req, res)=> {
   const newData= req.body ;
   Contact.findByIdAndUpdate({_id:req.params.id},newData,(err,msg=> {
if (err) throw err ;
else 
res.json({msg:"Contact was updated"});
   
}));
});




module.exports = router ; 