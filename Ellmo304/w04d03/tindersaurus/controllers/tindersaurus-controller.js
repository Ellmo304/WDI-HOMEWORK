const Profile = require("../models/tinder");

function tindersaurusIndex(req, res){
  Profile.find({}, (err, profiles) => {
    if(err) return res.status(500).send("500: Server Error");
    res.render('tinder/index', { profiles });
  });
}

function tindersaurusNew(req, res){
  res.render('tinder/new');
}

function tindersaurusCreate(req, res) {
  Profile.create(req.body.profile, (err, profile) => {
    if(err) return res.status(500).send("500: Server Error");
    res.redirect(301, '/tinder');
  });
}

function tindersaurusShow(req, res) {
  Profile.findById(req.params.id, (err, profile) => {
    if(err) return res.status(500).send("500: Server Error");
    res.render('tinder/show', { profile });
  });
}

function tindersaurusEdit(req, res) {
  Profile.findById(req.params.id, (err, profile) => {
    if(err) return res.status(500).send("500: Server Error");
    res.render('tinder/edit', { profile });
  });
}

function tindersaurusUpdate(req, res) {
  Profile.findByIdAndUpdate(req.params.id, req.body.profile, (err, profile) => {
    if(err) return res.status(500).send("500: Server Error");
    res.redirect(301, "/tinder");
  });
}

function tindersaurusDelete(req, res) {
  Profile.findByIdAndRemove(req.params.id, (err) => {
    if(err) return res.status(500).send("500: Server Error");
    res.redirect(301, '/tinder');
  });
}

module.exports = {
  index: tindersaurusIndex,
  new: tindersaurusNew,
  create: tindersaurusCreate,
  show: tindersaurusShow,
  edit: tindersaurusEdit,
  update: tindersaurusUpdate,
  delete: tindersaurusDelete
};
