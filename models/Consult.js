
const mongoose = require('mongoose');

const consultSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

export default mongoose.models.Consult || mongoose.model('Consult', consultSchema)