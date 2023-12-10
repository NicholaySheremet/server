const router = require("express").Router();

router.get('/', (req,res) => {
  res.send('Get list of to-do');
})

router.get('/delete', (req,res) => {
  res.send('Delete to-do from list');
})

router.get('/update', (req,res) => {
  res.send('Update to-do in list');
})

module.exports = router;