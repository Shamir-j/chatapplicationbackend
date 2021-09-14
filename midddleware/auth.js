const { request } = require('express');
const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }

  const token = authHeader.split(' ')[1];

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, 'amjustsomewheretyingtomakemistakeslifeisfullofstruggles');

  } catch (err) {
    req.isAuth = false;
    return next();
  }

  if (!decodedToken) {
    req.isAuth = false;
    return next();
  }
  req.userId = decodedToken.userId;
  req.sh_hotel_permissions_information_names = decodedToken.sh_hotel_permissions_names;
  req.isAuth = true;
  next();

};
