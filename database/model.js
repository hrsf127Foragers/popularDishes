const db = require ('./index.js');

module.exports = {
  fetchPopDish:(req, res) => {
    console.log(req.params.restaurant_id)
    db.query(`SELECT * From populardishes where id_restaurants = ${req.params.restaurant_id} `, (error, result) => {
      if (error) {
        console.log('this is error =>', error);
      } else {
        res.send(result)
      }
    })
  },
  fetchPictures: (req,res) => {
    console.log(req.params)
    db.query(`SELECT * From pictures where id_populardishes = ${req.params.populardish_id} `, (error, result) => {
      if (error) {
        console.log('this is error =>', error);
      } else {
        res.send(result)
      }
    })
  }
}