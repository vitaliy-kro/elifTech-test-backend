require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const { HOST_URI, PORT } = process.env;

async function server() {
  try {
    await mongoose.connect(HOST_URI);
    console.log('Database connection successful');

    app.listen(PORT || 4200, () => {
      console.log(`Server running on host ${PORT || 4200}`);
    });
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
}

server();
