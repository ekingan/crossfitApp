/*
 * GYM MODEL
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GymSchema = new Schema({
    created_at: { 
      type: Date, 
      default: Date.now() 
    },
    updated_at: { type: Date },
    name: { 
      type: String, 
      required: true
      // trim: true 
    },
    website: {
      type: String,
      required: false
    },
    reviews: [ReviewSchema]
    
});

// MIDDLEWARE
GymSchema.pre('save', function(next){
  // set a created_at and update updated_at
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

// export post model
var Gym = mongoose.model('Gym', GymSchema);

module.exports = Gym;
