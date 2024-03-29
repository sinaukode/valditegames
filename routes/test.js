const express = require('express');
const router = express.Router();
const test = require('../test')


router.get('/', async function(req, res, next) {
    let a = [
        [5,3,2,9,8,6,7,4,1],
        [4,8,7,2,1,5,3,6,9],
        [6,9,1,4,3,7,5,8,2],
        [3,2,5,1,7,4,8,9,6],
        [7,6,4,3,9,8,1,2,5],
        [8,1,9,5,6,2,4,3,7],
        [1,5,6,8,2,3,9,7,4],
        [9,7,8,6,4,1,2,5,3],
        [2,4,3,7,5,9,6,1,8]
    ];

    let b = [1, 2, 3 ,4,5,6,7,8,9];

    let result = await test.runner(a,b);
    res.json(result)

});

module.exports = router;
