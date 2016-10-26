const Weapon = require('../models/weapon');

function weaponsIndex(req, res) {
  Weapon.find((err, weapons) => {
    if (err) return res.status(500).json({ message: "Something went wrong." });
    return res.status(200).json(weapons);
  });
}

function weaponsCreate(req, res) {
  Weapon.create(req.body, (err, weapon) => {
    if(err) return res.status(400).json({ error: "400: Invalid data" });
    res.status(201).json(weapon);
  });
}

function weaponsShow(req, res) {
  Weapon.findById(req.params.id, (err, weapon) => {
    if (err) return res.status(500).json({ message: "Something went wrong." });
    if (!weapon) return res.status(404).json({ message: "Weapon not found." });
    return res.status(200).json(weapon);
  });
}

function weaponsUpdate(req, res) {
  Weapon.findByIdAndUpdate(req.params.id, req.body, { new: true },  (err, weapon) => {
    if (err) return res.status(500).json({ message: "Something went wrong." });
    if (!weapon) return res.status(404).json({ message: "Weapon not found." });
    return res.status(200).json(weapon);
  });
}

function weaponsDelete(req, res) {
  Weapon.findByIdAndRemove(req.params.id, (err, weapon) => {
    if (err) return res.status(500).json({ message: "Something went wrong." });
    if (!weapon) return res.status(404).json({ message: "Weapon not found." });
    return res.status(204).send();
  });
}

module.exports = {
  index:  weaponsIndex,
  create: weaponsCreate,
  show:   weaponsShow,
  update: weaponsUpdate,
  delete: weaponsDelete
};
