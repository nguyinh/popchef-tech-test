const Boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { logger } = require("../middlewares");
const { users } = require("../services");

exports.post = async (req, res, next) => {
  const { pseudo, password } = req.query;

  logger.info(`[USERS] post | ${pseudo}`);

  if (!pseudo || !password) return next(Boom.badRequest("Missing parameters"));

  try {
    const existingUsers = await users.find(pseudo);
    console.log(existingUsers);
    const alreadyExists = existingUsers.length;
    if (alreadyExists) return next(Boom.conflict('User already exists'));

    const hash = await bcrypt.hash(password, 10);
    const result = await users.add(pseudo, hash);

    return res.send(result.rows);
  } catch (err) {
    return next(err);
  }
};
