const router = require('express').Router();

const authManager = require('../managers/authManger');


router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    const {username, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {
        return res.redirect('404'); //TODO show message to the user
    }

    const existingUser = await authManager.getUserByUsername(username);

    if (existingUser) {
        return res.redirect('404');
    }

    const user = await authManager.register(username, password);

    console.log(user);

    res.redirect('/login');

});

module.exports = router;