const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const feedbackRoutes = require('./routes/feedback');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/feedback', feedbackRoutes);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/feedbackdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
