const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Krishkrishpathak@happend#';
function setToken(req, res, next) {
    console.log("set")
const id = req.params.id;

try {
      const data ={
            id:id
      }
      const token = jwt.sign(data,JWT_SECRET);
      
 next();
 } catch (error) {
 res.status(401).json({ error: ' token not generated' });
 }
 };
 module.exports = setToken