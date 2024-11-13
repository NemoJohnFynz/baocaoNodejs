import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
    const accessToken = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIREIN,
    });
    return accessToken ;
};

export default generateToken;