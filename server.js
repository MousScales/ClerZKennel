const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;
const DATA_FILE = path.join(__dirname, 'data', 'inquiries.json');

app.use(express.json());
app.use(express.static(ROOT_DIR));

function readInquiries() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeInquiries(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

app.post('/api/inquiries', (req, res) => {
  const { name, email, phone, puppy, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const inquiry = {
    id: Date.now(),
    name: name.trim(),
    email: email.trim(),
    phone: phone ? phone.trim() : '',
    puppy: puppy || 'Any available puppy',
    message: message.trim(),
    submittedAt: new Date().toISOString(),
  };

  const inquiries = readInquiries();
  inquiries.push(inquiry);
  writeInquiries(inquiries);

  console.log(`New inquiry from ${inquiry.name} about ${inquiry.puppy}`);
  res.status(201).json({ success: true, id: inquiry.id });
});

app.get('/api/inquiries', (_req, res) => {
  res.json(readInquiries());
});

app.get('*', (req, res, next) => {
  if (/\.(css|js|jpg|jpeg|png|gif|webp|ico|svg|woff2?)$/i.test(req.path)) {
    return next();
  }
  res.sendFile(path.join(ROOT_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`ClerZ Kennel site running at http://localhost:${PORT}`);
});
