const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const ProfilSchema = mongoose.Schema({
  _id:Number,
  nom: String,
  email: String,
  password: String,
  photo : String

}, {
  timestamps: true
});


ProfilSchema.methods.generateHash =  function(password){
  return bcrypt.hash(password, bcrypt.genSaltSync(8), null);
}
https://medium.appbase.io/how-to-implement-authentication-for-your-react-app-cf09eef3bb0b

  module.exports=mongoose.model('profil',ProfilSchema)