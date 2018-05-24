
import mongoose from 'mongoose';

const User = mongoose.model(
  'User', 
  new mongoose.Schema({
    email: {
      type: String,
      required: true,
      index: {
        unique: true,
      },
    },
    password: { 
      type: String, 
      required: true 
    },
  }),
);

export default User;