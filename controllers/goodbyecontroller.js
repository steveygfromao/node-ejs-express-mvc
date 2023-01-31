const data = require('../models/data');

const goodbyeView = (req,res) => {
    res.render('goodbye',{data:data.getData()});
}

module.exports = { goodbyeView }