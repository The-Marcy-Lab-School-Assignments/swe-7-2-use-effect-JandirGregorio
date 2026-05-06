const entryModel = require('../models/entryModel');

module.exports.listEntries = async (req, res, next) => {
  try {
    const entries = await entryModel.list();
    res.send(entries);
  } catch (err) {
    next(err);
  }
};

module.exports.showEntry = async (req, res, next) => {
  try {
    const entry = await entryModel.find(req.params.id);
    if (!entry) return res.status(404).send({ error: 'Entry not found.' });
    res.send(entry);
  } catch (err) {
    next(err);
  }
};

module.exports.createEntry = async (req, res, next) => {
  try {
    const { title, date, mood, content } = req.body;
    if (!title || !date || !mood) {
      return res.status(400).send({ error: 'title, date, and mood are required.' });
    }
    const entry = await entryModel.create({ title, date, mood, content });
    res.status(201).send(entry);
  } catch (err) {
    next(err);
  }
};

module.exports.updateEntry = async (req, res, next) => {
  try {
    const entry = await entryModel.update(req.params.id, req.body);
    if (!entry) return res.status(404).send({ error: 'Entry not found.' });
    res.send(entry);
  } catch (err) {
    next(err);
  }
};

module.exports.deleteEntry = async (req, res, next) => {
  try {
    const entry = await entryModel.destroy(req.params.id);
    if (!entry) return res.status(404).send({ error: 'Entry not found.' });
    res.send(entry);
  } catch (err) {
    next(err);
  }
};
