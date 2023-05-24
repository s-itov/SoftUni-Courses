const router = require('express').Router();
const cubeManager = require('../managers/cubeManager');

router.get('/create', (req, res) => {
    res.render('create');
    console.log(cubeManager.getAll());
});

router.post('/create', (req, res) => {

    const {
        name,
        description,
        imageUrl,
        difficultyLevel
    } = req.body;

    cubeManager.create({
        name,
        description,
        imageUrl,
        difficultyLevel: Number(difficultyLevel),
    });

    res.redirect('/');
});


router.get('/:cubeId/details', (req, res) => {
    const cube = cubeManager.getOne(req.params.cubeId);

    if (!cube) {
        res.redirect('404');
    }

    res.render('details', { cube })
})


module.exports = router;