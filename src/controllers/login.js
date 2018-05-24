import User from '../models/User';

import createToken from '../utils/createToken';

import { checkPass } from '../utils/password';

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({email});

  if (!user) {
    res.status(400).json({success: false, message: 'USER NOT FOUND'});
  } else if (user) {
    const isValid = await checkPass(user.password, password);

    if (!isValid) {
      res.status(400).json({ success: false, message: 'INVALID PASSWORD' });
    } else {
      const payload = {name: user.name};

      const token = createToken(payload);

      res.status(200).json({
        success: true,
        message: 'USER SUCCESS',
        name: user.name,
        token: token,
      });
    }
  }
};

export default login;