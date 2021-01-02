import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const { AUTH_API_SEED } = process.env;

export const tokenVerify = (req, res, next) => {
  let token = req.get('Authorization');

  jwt.verify(token, AUTH_API_SEED, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err,
      });
    }

    req.user = decoded.user;
    next();
  });
};
