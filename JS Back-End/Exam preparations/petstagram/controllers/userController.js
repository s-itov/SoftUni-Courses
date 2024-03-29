const router = require('express').Router();
const petsManager = require('../managers/petsManager');
const { isAuth } = require('../middlewares/authMiddleware');


router.get('/profile', isAuth, async (req, res) => {

  const pictures = await petsManager.getAll().populate('owner');

  const userPictures = pictures.filter(x => x.owner.username == req.user.username);

  res.render('profile', {
    username: req.user.username,
    email: req.user.email,
    count: userPictures.length,
    pictures: userPictures
  });

});

module.exports = router;