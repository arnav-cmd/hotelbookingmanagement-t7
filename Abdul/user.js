const mongoose=require('mongoose'),
bcrypt=require('bcrypt')
const userSchema = new mongoose.Schema({
  Username: {
    type: String,
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
userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});
const User = mongoose.model("User", userSchema);
module.exports = User;
