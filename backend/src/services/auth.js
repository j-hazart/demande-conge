const verifyPassword = (req, res) => {
  try {
    if (req.user.password === req.body.password) {
      delete req.user.password;
      res.send(req.user);
    } else {
      res.status(401).json({ message: "identifiants invalide" });
    }
  } catch (err) {
    res.sendStatus(500);
  }
};

module.exports = { verifyPassword };
