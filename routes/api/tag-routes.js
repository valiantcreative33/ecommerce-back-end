const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  }).then(tagData => {
    return res.json(tagData);
  }).catch(err => {
    console.log(err);
    return res.status(500).json(err);
  })
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    },
    where: {
      id: req.params.id
    }
  }).then(tagData => {
    if(!tagData) {
      res.status(404).json({ message: 'No tag was found with that id! '})
    }
    return res.json(tagData);
  }).catch(err => {
    console.log(err);
    return res.status(500).json(err);
  })
});

router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then(tagData => {
    return res.json(tagData);
  }).catch(err => {
    console.log(err);
    return res.status(500).json(err);
  })
});

router.put('/:id', (req, res) => {
  Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {  where: {
        id: req.params.id
      }
    }
  )
  .then(tagData => {
    if (!tagData) {
      res.status(404).json({ message: 'No tag was found with that id! '})
    }
    return res.json(tagData);
  }).catch(err => {
    console.log(err);
    return res.status(500).json(err);
  })
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(tagData => {
    return res.json(tagData);
  }).catch(err => {
    console.log(err);
    return res.status(500).json(err);
  })
});

module.exports = router;
