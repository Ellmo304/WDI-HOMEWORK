let quotes = require("../data/quotes");
let id = 9;
//index
const quotesIndex = (req, res) => {
  res.render('quotes/index', { quotes });
};
//new
const quotesNew = (req, res) => {
  res.render('quotes/new');
};


//create
const quotesCreate = (req, res) => {
  let quote = req.body.quote;
  quote.id = id;
  quotes.push(quote);
  id++;
  res.redirect(301, "/quotes");
};

//show
const quotesShow = (req, res) => {
let quote = quotes.filter((quote) => {
    return quote.id == req.params.id;
  })[0];
 res.render('quotes/show', { quote });
 };

//edit
const quotesEdit = (req, res) => {
  let quote = quotes.filter((quote) => {
      return quote.id == req.params.id;
    })[0];
res.render('quotes/edit', { quote });
};

//update
const quotesUpdate = (req, res) => {
  let index = quotes.findIndex((quote) => {
    return quote.id == req.params.id;
  });
  let quote = req.body.quote;
  quote.id = parseInt(req.params.id);
  quotes[index] = quote;

  res.redirect(301, "/quotes/");
};

//delete
const quotesDelete = (req, res) => {
  let index = quotes.findIndex((quote) => {
      return quote.id == req.params.id;
    });
    quotes.splice(index, 1);
    res.redirect(301, "/quotes");
};




module.exports = {
  index: quotesIndex,
  new: quotesNew,
  show: quotesShow,
  create: quotesCreate,
  edit: quotesEdit,
  update: quotesUpdate,
  delete: quotesDelete
};
