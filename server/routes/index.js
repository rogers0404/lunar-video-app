////////////////////////////////// Variables //////////////////////////////////////////////////////

const path = require('path');
const router = require('express').Router();
const sendMail = require('./mail');

///////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////// API Routes ////////////////////////////////////////////////////

  //API for POST request
  router.post("/mail", (req, res) => {
    // receiving the data from request

    const message = sendMail(req.body.day, req.body.time, req.body.link, req.body.mail, req.body.subject);
    res.json(message);

    // set id based on npm package shortid
    //req.body.id = shortid.generate();           //Getting an unique string ID from npm package
  
    // if any data in req.body is incorrect, send 400 error back
    /* if (!validateNote(req.body)) {
      res.status(400).send("You must enter a note in all text-inputs");
    } else {
      const note = addNote(req.body, notes);
      
    } */
  });



///////////////////////////////////////////////////////////////////////////////////////////////////


module.exports = router;