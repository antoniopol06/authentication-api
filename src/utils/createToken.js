import jwt from 'jsonwebtoken';

import config from './configuration';

const expiresIn = "2days"

export default function(payload) {
  return jwt.sign(payload, config.SECRET, { expiresIn });
}