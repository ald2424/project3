const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const Instructor = mongoose.model("instructors");
const keys = require("../config/keys");
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      Instructor.findById(jwt_payload.id)
        .then(instructor => {
          if (instructor) {
            return done(null, instructor);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
