import bcrypt from 'bcrypt';

export const checkPass = (hash, password) => {
  const isValid = bcrypt.compareSync(password, hash);

  return isValid;
};

export const hashPass = (password) => {
  const salt = bcrypt.genSaltSync(10);

  const hashPassword = bcrypt.hashSync(password, salt);

  return hashPassword;
};