const pool = require('../db/pool');

// Returns all entries ordered by date descending
module.exports.list = async () => {
  const { rows } = await pool.query('SELECT * FROM entries ORDER BY date DESC, id DESC');
  return rows;
};

// Returns a single entry by id, or null if not found
module.exports.find = async (id) => {
  const { rows } = await pool.query('SELECT * FROM entries WHERE id = $1', [id]);
  return rows[0] || null;
};

// Creates a new entry and returns the full row
module.exports.create = async ({ title, date, mood, content }) => {
  const { rows } = await pool.query(
    'INSERT INTO entries (title, date, mood, content) VALUES ($1, $2, $3, $4) RETURNING *',
    [title, date, mood, content]
  );
  return rows[0];
};

// Updates an entry by id and returns the updated row
module.exports.update = async (id, { title, date, mood, content }) => {
  const { rows } = await pool.query(
    'UPDATE entries SET title=$1, date=$2, mood=$3, content=$4 WHERE id=$5 RETURNING *',
    [title, date, mood, content, id]
  );
  return rows[0] || null;
};

// Deletes an entry by id and returns the deleted row
module.exports.destroy = async (id) => {
  const { rows } = await pool.query('DELETE FROM entries WHERE id=$1 RETURNING *', [id]);
  return rows[0] || null;
};
