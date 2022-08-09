module.exports = async (req, res, next) => {
  
  try {
    if (!req.user || req.user.email !== 'admin')
      throw new Error('access denied');
    next();
    
  } catch (e) {
    e.stats = 403;
    next(e);
  }
  
  
};
// TODO: Check req.user to ensure the user's email is 'admin'
