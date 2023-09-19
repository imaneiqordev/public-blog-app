const passport = require("passport");
module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      //hadi khsni nbdla
      res.redirect("/");
    }
  );
  app.get("/", (req, res) => {
    res.status(200).send({ message: "welcome to our page" });
  });
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
  app.get("/api/current-user", (req, res) => {
    res.send(req.user);
  });
};
