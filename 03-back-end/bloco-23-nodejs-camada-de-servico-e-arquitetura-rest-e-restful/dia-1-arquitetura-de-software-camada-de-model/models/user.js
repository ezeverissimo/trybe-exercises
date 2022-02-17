const connection = require('./connection');

const create = async ({ firstName, lastName, email, password }) => {
  const [ result ] = await connection.execute(
  `INSERT INTO users (firstName, lastName, email, userPassword)
  VALUES
    (?, ?, ?, ?)`, [firstName, lastName, email, password]
  );
    return {
      id: result.insertId,
      firstName,
      lastName,
      email,
      password,
    };
};

module.exports = {
  create,
}