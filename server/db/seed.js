const pool = require('./pool');

const seed = async () => {
  await pool.query('DROP TABLE IF EXISTS entries');

  await pool.query(`
    CREATE TABLE entries (
      id      SERIAL PRIMARY KEY,
      title   TEXT NOT NULL,
      date    DATE NOT NULL DEFAULT CURRENT_DATE,
      mood    TEXT NOT NULL,
      content TEXT
    )
  `);

  const { rows } = await pool.query(`
    INSERT INTO entries (title, date, mood, content) VALUES
      ('First day of the bootcamp', '2025-01-06', '😊', 'Met my cohort today. Everyone seems really kind and eager to learn.'),
      ('Debugging for hours',       '2025-01-07', '😠', 'Spent three hours hunting a missing semicolon. I will never forget to check the console first again.'),
      ('Things are clicking',       '2025-01-10', '😂', 'Array methods finally make sense! map, filter, and reduce are my new best friends.'),
      ('Tired but proud',           '2025-01-14', '😐', 'Long week. Submitted my project just before midnight. It works, but there is a lot I would do differently.'),
      ('Feeling behind',            '2025-01-17', '😢', 'Everyone else seems to understand React faster than I do. Going to review the notes tonight and ask for help tomorrow.')
    RETURNING id, title
  `);

  return rows;
};

seed()
  .then((entries) => {
    console.log('Database seeded successfully.');
    console.log(`  Entries: ${entries.map((e) => e.title).join(', ')}`);
  })
  .catch((err) => {
    console.error('Error seeding database:', err);
    process.exit(1);
  })
  .finally(() => pool.end());
