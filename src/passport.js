import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import { Strategy as KakaoStrategy } from 'passport-kakao';
import { Strategy as NaverStrategy } from 'passport-naver';
import config from './config';

passport.use(
  new FacebookStrategy(
    {
      clientID: config.auth.facebook.id,
      clientSecret: config.auth.facebook.secret,
      callbackURL: '/login/facebook/return',
      enableProof: true,
    },
    (accessToken, refreshToken, profile, done) => {
      done(null, { accessToken });
    },
  ),
);

passport.use(
  new GoogleStrategy(
    {
      clientID: config.auth.google.id,
      clientSecret: config.auth.google.secret,
      callbackURL: '/login/google/return',
    },
    (accessToken, refreshToken, profile, done) => {
      done(null, { accessToken });
    },
  ),
);

passport.use(
  new KakaoStrategy(
    {
      clientID: config.auth.kakao.id,
      clientSecret: config.auth.kakao.secret,
      callbackURL: '/login/kakao/return',
    },
    (accessToken, refreshToken, profile, done) => {
      done(null, { accessToken });
    },
  ),
);

passport.use(
  new NaverStrategy(
    {
      clientID: config.auth.naver.id,
      clientSecret: config.auth.naver.secret,
      callbackURL: '/login/naver/return',
    },
    (accessToken, refreshToken, profile, done) => {
      done(null, { accessToken });
    },
  ),
);

export default passport;
