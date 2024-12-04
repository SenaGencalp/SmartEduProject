const User = require("../models/User");

module.exports = async (req, res, next) => {
  try {
    const user = await User.findById(req.session.userID); // Async/await ile kullanıcıyı bul
    if (!user) {
      return res.redirect("/login"); // Kullanıcı yoksa login sayfasına yönlendir
    }
    next(); // Kullanıcı varsa devam et
  } catch (err) {
    console.error(err); // Hata loglama
    res.redirect("/login"); // Hata durumunda login sayfasına yönlendir
  }
};
