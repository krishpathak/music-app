const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Krishkrishpathak@happend#';
function verifyToken(req, res, next) {
      const token = req.cookies.token_musify;
     
   if (!token) return res.status(401).json({ error: 'Access denied' });
  try {
    const {user} = jwt.verify(token,JWT_SECRET);
    req.id=user.id;
    next();
    } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
    }
 }
 module.exports = verifyToken