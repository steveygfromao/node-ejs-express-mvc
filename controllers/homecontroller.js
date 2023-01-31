const data = require('../models/data');

const homeView = (req,res) => {
    res.render('home',{data:data.getData()});
}

module.exports = { homeView }