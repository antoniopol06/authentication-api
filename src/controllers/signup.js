import createToken from '../utils/createToken';

import User from '../models/User';

import { hashPass } from '../utils/password';

const signup = async(req, res) => {
  console.log(req.body);
  const {email, password} = req.body;

  if (!email || !password) {
    res.status(400).json({success: false, message: 'Need more info'});
  }

  const user = await User.findOne({ email });

  if (!user) {
    const hashedPassword = hashPass(password);

    await new User({email, password: hashedPassword}).save();

    res.status(200).json({success: true, message: 'SIGNUP OK'});
  } else {
    res.status(400).json({success: false, message: 'USER ALREADY TAKEN'});
  }
};

export default signup;