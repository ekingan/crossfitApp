/*
 * REVIEW MODEL
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReviewSchema = new Schema({
    created_at: { 
      type: Date, 
      default: Date.now() 
    },
    updated_at: { type: Date },
    content: { 
      type: String, 
      required: true
      // trim: true 
    },
    programming: {
      type: Boolean,
      required: false
    },
    community: {
      type: Boolean,
      required: false
    },
    vibe: {
      type: Boolean,
      required: false
    },
    schedule: {
      type: Boolean,
      required: false
    },
     price: {
      type: Boolean,
      required: false
  	}
});

// MIDDLEWARE
ReviewSchema.pre('save', function(next){
  // set a created_at and update updated_at
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

// export post model
var Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
