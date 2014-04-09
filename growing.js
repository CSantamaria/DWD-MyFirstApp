var recipes = require('./growing').data;

exports.list = function(req, res){
  res.render('growing.ejs', {
    title: 'What's growing on right now?',
    growing: growing
  });
};

exports.single = function(req, res) {
	var data = growing.filter(function  (growing) {
    return (growing.url === req.params.title);
  });

  if (data.length > 0) {
    data = data[0];
    data.title = 'What's growing around you:';

    res.render('growing.ejs', data);
  } else {
    res.status(404).render('error.ejs', {title: 'Fruits and vegetables not found :( '});
  }
};

exports.suggest = function(req, res) {
  res.render('suggest_result.ejs', {
    title: 'It's growing - Thanks!',
    name: req.body.name,
  });
};
