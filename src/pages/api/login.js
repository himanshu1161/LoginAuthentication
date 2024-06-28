export default function handler(req, res) {
    if (req.method === 'POST') {
      const { username, password } = req.body;
      if (username === 'Himanshu' && password === 'pass9582') {
        res.status(200).json({ token: 'dummy-token' });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  