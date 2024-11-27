const createUsers = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR,
  email VARCHAR UNIQUE,
  password VARCHAR
)
`;

module.exports = createUsers;