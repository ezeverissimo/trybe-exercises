const user = require('../models/user');

module.exports = async (req, res, next) => {
  try {
      const { firstName, lastName, email, password } = req.body;
      if(!firstName || !lastName || !email || !password) {
        return res.status(400).json({
          error: true,
          message: 'Todos os campos são obrigatórios'
        });
      }
      if(password.length < 6) return res.status(400).json({
        error: true,
        message: "O campo 'password' deve ter pelo menos 6 caracteres"
      });
      const result = await user.create({ firstName, lastName, email, password });
      res.status(201).json(result);
  } catch (error) {
      return next(error);
  }
}