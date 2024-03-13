
import mongoose from 'mongoose';
const MONGO_URI = "mongodb://localhost:27017/meetup"

async function connectToDatabase() {
  try {
    const db = await mongoose.connect(MONGO_URI );
    console.error('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    
  }
}

export default connectToDatabase;
