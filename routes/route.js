const express = require('express');
const router = express.Router();
var mongojs = require('mongojs');
//var db = mongojs('mongodb://Yuvi:Passw0rd@ds223763.mlab.com:23763/my_contacts',['mycontacts']);
var db = mongojs('mongodb://localhost:27017/my_contacts',['mycontacts']);

//Get All Contacts
router.get('/contacts', (req, res, next) => {
    //res.send('tasks api ');
    db.mycontacts.find((err, mycontacts) =>{
        if(err){
            res.send(err);
        }
        res.send(mycontacts);
    });
});

//Get a single Contact
router.get('/contact/:id', (req, res, next) =>{
    db.mycontacts.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, mycontacts) =>{
        if(err){
            res.send(err);
        }
        res.json(mycontacts);
    });
});

//Removing a contact from the phonebook
router.delete('/contact/:id', (req, res, next)=>{
    db.mycontacts.remove({_id: mongojs.ObjectId(req.params.id)}, (err, result)=>{
        if(err){
            res.json(err);
        }
        res.json(result);
    });
})

//Create a new Contact in the list
router.post('/contact', (req, res, next) =>{
    var contact = req.body;
    if(!contact.firstname || !(contact.lastname || !contact.phone + '')){
        res.status(400);
        res.json({
            "error": "Invalid Data supplied !"
        });
    } else {
        db.mycontacts.save(contact, (err, contact) =>{
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }
});

//Update a Contact from the Phonebook
router.put('/Contact/:id', (req,res, next) =>{
    var contact = req.body;
    var updContact = {};
    if(contact.phone){
        updContact.phone = contact.phone;
    }
    if(contact.firstname){
        updContact.firstname = contact.firstname;
    }
    if(contact.lastname){
        updContact.lastname = contact.lastname;
    }
    if(!updContact){
        res.status(400);
        res.json({
            "error":"Invalid  input supplied !"
        });
    } else {
        db.mycontacts.update({_id:mongojs.ObjectId(req.params.id)},updContact, {}, (err, contact)=>{
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }
});

module.exports = router;