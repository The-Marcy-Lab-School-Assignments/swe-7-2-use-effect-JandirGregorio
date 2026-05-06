const path = require('path');
const express = require('express');
require('dotenv').config();

const logRoutes = require('./middleware/logRoutes');
const entryController = require('./controllers/entryController');

const app = express();
const PORT = process.env.PORT || 8080;

// ====================================
// Middleware
// ====================================

app.use(logRoutes);
app.use(express.json());

// In production, serve the built React app from frontend/dist.
// In development, Vite's dev server handles the frontend on a separate port
// and proxies /api requests to this server.
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// ====================================
// Entry routes
// ====================================

app.get('/api/entries', entryController.listEntries);
app.get('/api/entries/:id', entryController.showEntry);
app.post('/api/entries', entryController.createEntry);
app.patch('/api/entries/:id', entryController.updateEntry);
app.delete('/api/entries/:id', entryController.deleteEntry);

// ====================================
// Global Error Handler
// ====================================

const handleError = (err, req, res, next) => {
  console.error(err);
  res.status(500).send({ message: 'Internal Server Error' });
};
app.use(handleError);

// ====================================
// Listen
// ====================================

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
