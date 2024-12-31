// routes/messages.js
const express = require('express');
const router = express.Router();
const db = require('../db'); // Pastikan koneksi database Anda tersedia

// Endpoint untuk menyimpan pesan
router.post('/messages', async (req, res) => {
  const { text, sender } = req.body;

  if (!text || !sender) {
    return res.status(400).json({ error: 'Text and sender are required.' });
  }

  try {
    const query = 'INSERT INTO messages (text, sender) VALUES (?, ?)';
    await db.execute(query, [text, sender]);
    res.status(201).json({ message: 'Message saved successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save message.' });
  }
});

module.exports = router;
