const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const collection = require('./usermongo');
const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(express.json());

app.post('/login', async (req, res) => {
  const { Username, email, password,mobile } = req.body;
  try {
    const user = await collection.findOne({ email: email});
    if (!user) {
      console.log('User not found:', email);
      return res.json('notexist');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('Password Valid:', isPasswordValid);
    if (isPasswordValid) {
      res.json('success');
    } else {
      res.json('invalid');  
    }
  } catch (e) {
    console.error('Login error:', e.message);
    res.json('fail');
  }
});



app.post('/signup', async (req, res) => {
  const { Username, email, password,mobile } = req.body;
  try {
    const check = await collection.findOne({ email: email ,});
    if (check) {
      res.json('exist');
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const data = {
        Username:Username,
        email: email,
        password: hashedPassword,
        mobile: mobile,
      };
      await collection.insertMany([data]);
      res.json('success');
    }
  } catch (e) {
    console.error('Signup error:', e.message);
    res.json('fail');
  }
});

app.listen(8000, () => {
  console.log('Server is running on http://127.0.0.1:8000');
});
