const Plant = require('../models/plant');

function plantsIndex(req, res) {
  Plant.find((err, plants) => {
    if(err) return res.status(500).json({ error: err });
    return res.json(plants);
  });
}

function plantsCreate(req, res) {
  Plant.create(req.body, (err, plant) => {
    if(err) return res.status(400).json({ error: err });
    return res.json(plant);
  });
}

function plantsShow(req, res) {
  Plant.findById(req.params.id, (err, plant) => {
    if(err) return res.status(500).json({ error: err });
    if(!plant) return res.status(404).json({ error: 'Not found' });
    return res.json(plant);
  });
}

function plantsUpdate(req, res) {
  Plant.findById(req.params.id, (err, plant) => {
    if(err) return res.status(500).json({ error: err });
    if(!plant) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      plant[key] = req.body[key];
    }

    plant.save((err, plant) => {
      if(err) return res.status(400).json({ error: err });
      res.json(plant);
    });
  });
}

function plantsDelete(req, res) {
  Plant.findById(req.params.id, (err, plant) => {
    if(err) return res.status(500).json({ error: err });
    if(!plant) return res.status(404).json({ error: 'Not found' });

    plant.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}

module.exports = {
  index: plantsIndex,
  create: plantsCreate,
  show: plantsShow,
  update: plantsUpdate,
  delete: plantsDelete
};
