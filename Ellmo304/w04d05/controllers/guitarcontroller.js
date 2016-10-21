const Guitar = require("../models/guitar");


function guitarsIndex(req, res) {
  Guitar.find({}, (err, guitars) => {
    if(err)res.status(500).json({ error: err });
    res.json(guitars);
  });
}

function guitarsCreate(req, res) {
  Guitar.create(req.body, (err, guitar) => {
    if(err)res.status(500).json({ error: err });
    res.status(201).json(guitar);
  });
}

function guitarsShow(req, res) {
  Guitar.findById(req.params.id, (err, guitar) => {
    if(err)res.status(500).json({error: err});
    res.status(201).json(guitar);
  });
}

function guitarsUpdate(req, res) {
  Guitar.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, guitar) => {
    if(err)res.status(500).json({error: err});
    res.status(201).guitar.json(guitar);
  });
}

function guitarsDelete(req, res) {
  Guitar.findByIdAndRemove(req.params.id, (err)=> {
    if(err)res.status(500).json({error: err});
    res.send(204);
  });
}




module.exports = {
  index: guitarsIndex,
  create: guitarsCreate,
	show: guitarsShow,
	update: guitarsUpdate,
	delete: guitarsDelete
};
