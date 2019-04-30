import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Create the User Schema.
const ContactSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  userId: {
    type: String,
    required: true
  }
});

const Contact = mongoose.model('Contact', ContactSchema);

export default Contact;
