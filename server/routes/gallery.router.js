const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    let sqlText = `UPDATE "gallery" SET "likes" = ("likes" + 1) WHERE "id" = $1;`;
    pool.query(sqlText, [galleryId])
    .then(result => {
        res.sendStatus(200);
    })
    .catch(error => {
        console.log(error);
        res.sendStatus(500);
    })
    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }
    // res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    let sqlText = `SELECT * FROM "gallery" ORDER BY "id" ASC;`;
    pool.query(sqlText)
    .then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log(error);
        res.sendStatus(500);
    })
    //res.send(galleryItems);
}); // END GET Route

// POST Route
router.post('/', (req, res) => {
    let imageToPost = req.body;
    let sqlText = `INSERT INTO "gallery" ("path", "description")
                    VALUES ($1, $2);`;
    pool.query(sqlText, [imageToPost.path, imageToPost.description])
    .then(result => {
        res.sendStatus(201);
    })
    .catch(error => {
        console.log(error);
    })
}); //end POST route

router.delete('/:id', (req, res) => {
    let idToDelete = req.params.id;
    let sqlText = `DELETE FROM "gallery" WHERE "id" = $1;`;
    pool.query(sqlText, [idToDelete])
    .then(result => {
        res.sendStatus(204);
    })
    .catch(error => {
        console.log(error);
    })
}); //end DELETE route

module.exports = router;