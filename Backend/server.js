const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

// MongoDB Atlas connection string

mongoose.connect('mongodb+srv://lahirumadurangalm8:1234@clusterlahiru.yhasvhw.mongodb.net/railway?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define user schema and model
const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const User = mongoose.model('login', userSchema);

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.json({ message: 'Login successful' });
    } else {
      res.json({ message: 'Login failed' });
    }
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
