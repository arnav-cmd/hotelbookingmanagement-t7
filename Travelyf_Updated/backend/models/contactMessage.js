const mongoose = require('mongoose');

const contactMessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String
});

const ContactMessage = mongoose.model('ContactMessage', contactMessageSchema);

module.exports = ContactMessage;