const express = require('express');
const router = express.Router();
const Images = require('../Model/imagesURL');
const grammarianSlide = require('../Model/gramarianSlide')

router.post('/admin', async (req, res) => {
    try {
        const image = new Images(req.body);
        console.log(image)
        const savedImage = await image.save();
        res.status(201).json(savedImage);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.post('/admin', async (req, res) => {
    try {
        console.log(req.body);
        const list = new grammarianSlide(req.body);
        const savedList= await image.save();
        res.status(201).json(savedList);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/admin', async (req, res) => {
    try {
        const images = await Images.find();
        res.status(200).json(images);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/admin/:id', async (req, res) => {
    try {
        const image = await Images.findById(req.params.id);
        if (!image) return res.status(404).json({ error: 'Images not found' });
        res.status(200).json(image);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/admin', async (req, res) => {
    try {
        const list = await grammarianSlide.find();
        res.status(200).json(list);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/admin/:id', async (req, res) => {
    try {
        const list = await grammarianSlide.findById(req.params.id);
        if (!list) return res.status(404).json({ error: 'List not found' });
        res.status(200).json(list);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/admin/:id', async (req, res) => {
    try {
        const updatedImage = await Images.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedImage) return res.status(404).json({ error: 'Images not found' });
        res.json(updatedImage);  // Ensure this returns the updated images data
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.delete('/admin/:id', async (req, res) => {
    try {
        const deletedImage = await Images.findByIdAndDelete(req.params.id);
        if (!deletedImage) return res.status(404).json({ error: 'Images not found' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;