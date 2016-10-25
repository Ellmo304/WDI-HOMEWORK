const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = mongoose.Schema({
  username: { type: String, trim: true, required: true, unique: true },
  email: { type: String, trim: true, required: true },
  passwordHash: { type: String, required: true }
});

function setPassword(value){
  this._password = value;
  this.passwordHash = bcrypt.hashSync(value, bcrypt.genSaltSync(8));
}

function setPasswordConfirmation(passwordConfirmation) {
  this._passwordConfirmation = passwordConfirmation;
}

function validatePasswordHash() {
  if(this.isNew) {
    if(!this._password) {
      return this.invalidate("password", "Please enter a password.");
    }
    if(this._password.length < 8) {
      this.invalidate("password", "Must be at least 8 characters.");
    }
    if(this._password !== this._passwordConfirmation) {
      return this.invalidate("passwordConfirmation", "Passwords do not match.");
    }
  }
}

function validateEmail(email) {
  if (!validator.isEmail(email)) {
    return this.invalidate('email', 'must be a valid email address');
  }
}

function validatePassword(password) {
  return bcrypt.compareSync(password, this.passwordHash);
}


userSchema
  .virtual("password")
  .set(setPassword);

userSchema
  .virtual("passwordConfirmation")
  .set(setPasswordConfirmation);

userSchema
  .path("passwordHash")
  .validate(validatePasswordHash);

userSchema.methods.validatePassword = validatePassword;

userSchema
  .path('email')
  .validate(validateEmail);

userSchema.set("toJSON", {
  transform: function(doc, json) {
    delete json.passwordHash;
    delete json.email;
    delete json.__v;
    return json;
  }
});


module.exports = mongoose.model('User', userSchema);
