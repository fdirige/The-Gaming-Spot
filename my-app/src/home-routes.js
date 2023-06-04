// Dependencies
const router = require('express').Router();

// The route to get the landing page
router.get('/', async (req, res) => {
    res.render('homepage');
  });
// 

  router.get('/login', (req, res) => {
    res.render('login');
});
// 

router.get('/signup', (req, res) => {
    res.render('signup');
});
//
 
router.get('/Profile', (req, res) => {
    res.render('Profile');
});


module.exports = router;