const router = require('express').Router();
const passport = require('passport');


router.get(
    '/auth/google',
    passport.authenticate('google', {scope: ['profile', 'email']})
)

router.get(
    "/oauth2callback",
    passport.authenticate("google", {
      successRedirect: "/users/:id",
      failureRedirect: "/",
    })
  );

  router.get('/logout', (req, res) => {
      req.logout();
      res.redirect('/');
  })

module.exports = router