const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Connect to the MongoDB database
mongoose
  .connect('mongodb://127.0.0.1:27017/hotel', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error.message);
  });

const userSchema = new mongoose.Schema({
    Username:{
        type:String

    },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,

  },
  
  
  
});

// Before saving the user, hash the password
userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
