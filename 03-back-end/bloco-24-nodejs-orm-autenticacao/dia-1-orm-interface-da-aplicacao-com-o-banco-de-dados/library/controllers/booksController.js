const { Book } = require('../models');

const findAll = async (_req, res) => {
  try {
    const books = await Book.findAll();

    return res.status(200).send(books);
  } catch (error) {
    console.log(error.message);
    return res.status(500).end();
  }
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await Book.findByPk(id);

    if(!books) return res.status(404).json({ message: 'book not found' });

    return res.status(200).send(books);
  } catch (error) {
    console.log(error.message);
    return res.status(500).end();
  }
};

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;

    const books = await Book.create({ title, author, pageQuantity });

    return res.status(201).json({books});
  } catch (error) {
    console.log(error.message);
    return res.status(500).end();
  }
};
module.exports = {
  findAll,
  findById,
  create,
};