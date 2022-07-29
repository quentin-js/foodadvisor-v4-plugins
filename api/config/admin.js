const GithubStrategy = require('passport-github2');

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '37cb4377c425a87b76e93e0435073b73'),
    providers: [
      {
        uid: 'github',
        displayName: 'Github',
        icon: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/github-512.png',
        createStrategy: (strapi) =>
          new GithubStrategy(
            {
              clientID: env('GITHUB_CLIENT_ID'),
              clientSecret: env('GITHUB_CLIENT_SECRET'),
              scope: ['user:email'],
              callbackURL:
                strapi.admin.services.passport.getStrategyCallbackURL('github'),
            },
            (accessToken, refreshToken, profile, done) => {
              done(null, {
                email: profile.emails[0].value,
                username: profile.username,
              });
            }
          ),
      },
    ],
    events: {
      onSSOAutoRegistration(e) {
        const { user, provider } = e;

        console.log(
          `A new user (${user.id}) has been automatically registered using ${provider}`
        );
      },
      onConnectionError(e) {
        console.log(e.provider);
      },
    },
  },
});
