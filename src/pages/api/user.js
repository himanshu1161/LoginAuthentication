export default function handler(req, res) {
    const { authorization } = req.headers;
  
    if (authorization === 'Bearer dummy-token') {
      res.status(200).json({ username: 'Himanshu' });
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  }
  