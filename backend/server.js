const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'Backend running' });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password required' });
  }

  if (username === 'admin' && password === 'admin') {
    return res.status(200).json({ 
      success: true,
      message: 'Login successful', 
      username 
    });
  }

  return res.status(401).json({ 
    success: false,
    message: 'Invalid credentials' 
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
