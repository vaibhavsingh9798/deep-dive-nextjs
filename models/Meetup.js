

import mongoose from 'mongoose';

const MeetupSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
 
 
});



export default mongoose.models.Meetup ||  mongoose.model('Meetup', MeetupSchema);
