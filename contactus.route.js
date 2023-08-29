const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/contactMessage'); // Create a mongoose model for the contact messages

router.post('/submit', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      subject,
      message
    } = req.body;

    // Create a new contact message instance
    const newContactMessage = new ContactMessage({
      name,
      email,
      phone,
      subject,
      message
    });

    // Save the message to the database
    await newContactMessage.save();

    res.status(201).json({ message: 'Message submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while submitting the message.' });
  }
});

router.get('/contactmessages',async(req,res)=>{
    ContactMessage.find()
    .then((message)=>{
        res.json(message);
    })
    .catch((error)=>{
        next(error);
    })
})

module.exports = router;
