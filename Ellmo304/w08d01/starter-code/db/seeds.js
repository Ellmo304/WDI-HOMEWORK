const mongoose = require('mongoose');
const db = require('../config/db');
const Plant = require('../models/plant');

mongoose.connect(db.uri);

Plant.collection.drop();

Plant.create([{
  species: 'Choisya',
  variety: 'Aztec Pearl',
  hardy: true,
  image: 'http://www.harleynursery.co.uk/treesshrubs/TreesShrubsImages/Choisya%20Aztec%20Pearl%20P.JPG',
  price: '£12.99'
},{
  species: 'Photinia',
  variety: 'Red Robin',
  hardy: true,
  image: 'https://cdn.shopify.com/s/files/1/0557/0657/products/Photinia-x-fraseri-Red-Robin.jpg?v=1436972771',
  price: '£14.99'
}], (err, plants) => {
  if(err) console.log('There was an error creating plants', err);

  console.log(`${plants.length} plants created!`);
  mongoose.connection.close();
});
