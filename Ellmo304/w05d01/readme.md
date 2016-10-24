# MunchHub with GoogleMaps

## Introduction

Your task is to make a Google Maps website that displays your favourite restaurants on a map.

## Exercise

#### Requirements

- You will need to use your GoogleMaps API key
- You will need to make a request to the API to get all of the restaurants
- Display the restaurant markers on the page with GMaps

**Bonus tasks:**

- Mark your current location on the map
- Style it!

#### Starter code

We have given you a starter-code already with: 

- a fully working restaurants API
- a `gulpfile.js`
- `jQuery` included
- `reset.css` file included

The API includes a Restaurant model that looks like this:

```js
const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name:        { type: String, trim: true, required: true },
  image:       { type: String, trim: true, required: true },
  description: { type: String, trim: true },
  lat:         { type: String, time: true, required: true },
  lng:         { type: String, time: true, required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
```
Note the `required: true` fields.

You can run: `node db/seed.js` to populate a few items to the database. You will need to `ctrl + c` to close the window once the seeds file has run ("Bleecker Street was saved." is the last entry).

If you want to add more, you can use Insomnia.

`localhost:3000/api/restaurants` and `localhost:3000/api/restaurants/:id` are the addresses for the api.

Running gulp will add the necessary public folder. It will now minify your `public.style.css` file with `gulp-clean-css`. An npm package designed to do just that.